import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

type GalleryProps = {
  gallery: Array<string>;
};

const Wrapper = styled.div`
  width: 68%;
  padding: 25px 20px;
`;
const ThumbSlides = styled.div``;
const ThumbSlide = styled.div`
  & > img {
    width: 100%;
    height: 176px;
    border-radius: 5px;
    object-fit: cover;
  }
`;

const MainSlides = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

const MainSlide = styled.div`
  & > img {
    width: 100%;
    height: 560px;
    border-radius: 5px;
    object-fit: cover;
  }
`;

const Gallery = (props: GalleryProps) => {
  const primarySliderRef: any = React.useRef(undefined);
  const secondarySliderRef: any = React.useRef(undefined);

  const [primarySlider, setPrimarySlider] = React.useState<any>(undefined);
  const [secondarySlider, setSecondarySlider] = React.useState<any>(undefined);

  React.useEffect(() => {
    if (primarySliderRef.current) {
      setPrimarySlider(primarySliderRef.current);
      setSecondarySlider(secondarySliderRef.current);
    }
  }, []);

  return (
    <Wrapper>
      <MainSlides>
        <Slider
          ref={primarySliderRef}
          asNavFor={secondarySlider}
          slidesToShow={1}
          arrows={false}
          fade={true}
          infinite={false}
        >
          {props.gallery.map((item, i) => (
            <MainSlide key={i}>
              <img src={item} alt="test" />
            </MainSlide>
          ))}
        </Slider>
      </MainSlides>
      <ThumbSlides>
        <Slider
          ref={secondarySliderRef}
          asNavFor={primarySlider}
          slidesToShow={3}
          arrows={false}
          focusOnSelect={true}
          infinite={false}
        >
          {props.gallery.map((item, i) => (
            <ThumbSlide key={i}>
              <img src={item} alt="test" />
            </ThumbSlide>
          ))}
        </Slider>
      </ThumbSlides>
    </Wrapper>
  );
};

export default Gallery;
