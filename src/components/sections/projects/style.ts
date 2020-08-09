import styled from 'styled-components';
import { fadeIn, fadeInLeft, fadeInRight } from '@styles/animations';

type SliderArrowProps = {
  className: string;
  style: any;
  onClick: Function;
};

export const Wrapper = styled.div`
  padding: 100px 0;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  opacity: 0;

  &.visible {
    animation: ${fadeIn} 250ms linear forwards;
    animation-delay: 500ms;
  }
`;

export const Subtitle = styled.span`
  display: inline-block;
  opacity: 0;

  &.visible {
    animation: ${fadeIn} 250ms linear forwards;
    animation-delay: 750ms;
  }
`;

export const List = styled.div`
  position: relative;
  margin: 80px -10px 100px -10px;

  .slick-slide > div {
    height: 100%;
  }
`;

export const SliderArrows = styled.div`
  margin: 40px 0;
  display: flex;
  justify-content: space-between;
`;

export const SliderArrow = styled.button`
  background: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: bold;
  padding: 0;
  position: absolute;
  top: -50px;
  cursor: pointer;

  &.slick-prev {
    left: 10px;
    opacity: 0;

    ${List}.visible & {
      animation: ${fadeInRight} 250ms linear forwards;
      animation-delay: 750ms;
    }
  }
  &.slick-next {
    right: 10px;
    opacity: 0;

    ${List}.visible & {
      animation: ${fadeInLeft} 250ms linear forwards;
      animation-delay: 750ms;
    }
  }
  &.slick-disabled {
    color: #3c4e73;
    cursor: not-allowed;
  }
`;

export const Dots = styled.ul`
  display: flex;
  position: absolute;
  bottom: -100px;
  left: 50%;
  transform: translateX(-50%);

  & > li {
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
    & > button {
      transition: background 250ms;
      background: none;
      color: ${({ theme }) => theme.text};
      font-weight: bold;
      border: 1px solid #3c4e73;
      padding: 10px 15px;
      border-radius: 5px;
      cursor: pointer;
    }
    &.slick-active > button {
      color: #3c4e73;
      background: ${({ theme }) => theme.text};
      border-color: transparent;
    }
  }
`;
