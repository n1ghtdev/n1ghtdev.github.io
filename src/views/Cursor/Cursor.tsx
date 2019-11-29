import React from 'react';
import { createPortal } from 'react-dom';
import lerp from '../../utils/lerp';
import { debounce } from 'throttle-debounce';

type CursorOptions = {
  cursorScale?: number;
  followerColor?: string;
  followerWidth?: number;
  followerRadius?: number;
};

const useCursor = (
  cursorRef: any,
  followerRef: any,
  {
    cursorScale = 1,
    followerColor = '#fff',
    followerWidth = 1,
    followerRadius = 10,
  }: CursorOptions = {},
) => {
  let clientX = -110;
  let clientY = -110;
  let lastX = 0;
  let lastY = 0;
  let isHovered = false;

  let _cursorScale = cursorScale;
  let canvasRadius = followerRadius;

  const strokeColor = followerColor;
  const strokeWidth = followerWidth;

  const context: any = React.useRef();
  const rAF: any = React.useRef();

  React.useEffect(() => {
    initialize();
    return () => destroy();
  });
  const initialize = () => {
    addEvents();
    context.current = followerRef.current.getContext('2d');
    rAF.current = requestAnimationFrame(render);
  };
  const destroy = () => {
    removeEvents();
    cancelAnimationFrame(rAF.current);
  };
  const render = () => {
    if (isHovered && _cursorScale < 10) {
      _cursorScale += 0.5;
      canvasRadius = _cursorScale === 10 ? 0 : canvasRadius - 0.5;
    } else if (!isHovered && _cursorScale !== 1) {
      _cursorScale -= 0.5;
      canvasRadius = _cursorScale === 1 ? 10 : canvasRadius + 0.5;
    }

    renderCursor();
    renderCursorFollower();
    requestAnimationFrame(render);
  };
  const renderCursor = () => {
    cursorRef.current.style.transform = `translate(${clientX}px, ${clientY}px) scale(${_cursorScale})`;
  };
  const renderCursorFollower = (): void => {
    const { current } = context;

    current.clearRect(
      0,
      0,
      document.body.clientWidth,
      document.body.clientHeight,
    );

    lastX = lerp(lastX, clientX, 0.1);
    lastY = lerp(lastY, clientY, 0.1);

    current.beginPath();
    current.arc(lastX, lastY, canvasRadius, 0, 2 * Math.PI);
    current.lineWidth = strokeWidth;
    current.strokeStyle = strokeColor;
    current.stroke();
    current.closePath();
  };
  const mouseEvent = (e: any) => {
    clientX = e.clientX;
    clientY = e.clientY;
  };
  const hoverEvent = (e: any) => {
    if (e.target.tagName === 'A') {
      isHovered = true;
    } else {
      isHovered = false;
    }
  };
  const resizeEvent = debounce(300, () => {
    followerRef.current.width = document.body.clientWidth;
    followerRef.current.height = document.body.clientHeight;
  });
  const addEvents = () => {
    document.addEventListener('mousemove', mouseEvent);
    document.addEventListener('mouseover', hoverEvent);
    window.addEventListener('resize', resizeEvent);
  };
  const removeEvents = () => {
    document.removeEventListener('mousemove', mouseEvent);
    document.removeEventListener('mouseover', hoverEvent);
    window.removeEventListener('resize', resizeEvent);
  };
  return { initialize, destroy };
};

const Cursor = () => {
  const cursorRef: any = React.useRef(null);
  const followerRef: any = React.useRef(null);

  const { initialize, destroy } = useCursor(cursorRef, followerRef, {
    followerWidth: 2,
  });

  return createPortal(
    <>
      <div ref={cursorRef} className="cursor cursor--dot" />
      <canvas
        ref={followerRef}
        className="cursor cursor--canvas"
        width={document.body.clientWidth}
        height={document.body.clientHeight}
      ></canvas>
    </>,
    document.body,
  );
};

export default Cursor;
