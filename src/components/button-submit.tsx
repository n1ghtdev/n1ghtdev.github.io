import React from 'react';
import styled from 'styled-components';
import Button from './button';
import LoadingSpinner from './loading-spinner';

type Props = {
  loading: boolean;
  children: string | React.ReactNode;
  className?: string;
} & Partial<React.ButtonHTMLAttributes<any>>;

const StyledButton = styled(Button)`
  height: 42px;
  padding: 10px 24px;
  max-width: 200px;
  display: block;
  width: 100%;
  margin: 0 auto;
`;

const LoadingWrapper = styled.span`
  transition: margin-right 250ms;
  margin-right: ${({ visible }: { visible?: boolean }) =>
    visible ? '16px' : '0px'};

  & > svg {
    display: inline-block;
    line-height: 1;
    vertical-align: -0.125em;
  }
`;

function ButtonSubmit(props: Partial<Props>) {
  const { type, onClick, disabled, loading = false, children, ...rest } = props;

  const [innerLoading, setInnerLoading] = React.useState(loading || false);
  const loadingTimerRef = React.useRef<number>();

  React.useEffect(() => {
    clearTimeout(loadingTimerRef.current);

    if (loading) {
      setInnerLoading(true);
    } else {
      loadingTimerRef.current = window.setTimeout(() => {
        setInnerLoading(false);
      }, 1000);
    }
  }, [loading]);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (innerLoading) {
      return;
    } else if (onClick) {
      (onClick as React.MouseEventHandler<HTMLButtonElement>)(e);
    }
  }

  return (
    <StyledButton
      type={type || 'button'}
      disabled={disabled || innerLoading}
      onClick={handleClick}
      {...rest}
    >
      {innerLoading ? (
        <LoadingWrapper visible={true}>
          <LoadingSpinner />
        </LoadingWrapper>
      ) : (
        <LoadingWrapper />
      )}
      {children}
    </StyledButton>
  );
}

export default ButtonSubmit;
