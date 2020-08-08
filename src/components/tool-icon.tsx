import React from 'react';
// eslint-disable-next-line import/no-webpack-loader-syntax
import sprite from '!!svg-sprite-loader!../assets/tools.sprite.svg';

type Props = {
  name: string;
};

function ToolIcon({ name }: Props) {
  const spriteHref = `#${sprite.id}_${name}`;

  if (!spriteHref) {
    throw new Error(`Icon "${name}" not found inside current SVG sprite!`);
  }

  return (
    <svg width="100%" viewBox={sprite.viewBox}>
      <use href={spriteHref} />
    </svg>
  );
}

export default ToolIcon;
