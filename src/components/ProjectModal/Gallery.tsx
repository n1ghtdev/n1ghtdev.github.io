import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

type GalleryProps = {
  gallery?: string[];
};

const Wrapper = styled.div`
  width: 68%;
  padding: 25px 20px;
`;
const ThumbSlides = styled.div``;
const ThumbSlide = styled.div`
  width: 100%;
  height: 176px;
  background-color: grey;
  border-radius: 5px;
  & > img {
    height: 100%;
    width: 100%;
    border-radius: inherit;
    object-fit: cover;
  }
`;

const MainSlides = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

const MainSlide = styled.div`
  width: 100%;
  height: 560px;
  background-color: grey;
  border-radius: 5px;

  & > img {
    height: 100%;
    width: 100%;
    border-radius: inherit;
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
  // if (props.gallery) return null;
  // if (!props.gallery) return <Wrapper />;
  const gallery: string[] = props.gallery || ['', '', ''];
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
          {gallery.map((item, i) =>
            item ? (
              <MainSlide key={i}>
                <img src={item} alt="test" />
              </MainSlide>
            ) : (
              <MainSlide key={i}></MainSlide>
            ),
          )}
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
          {gallery.map((item, i) =>
            item ? (
              <ThumbSlide key={i}>
                <img src={item} alt="test" />
              </ThumbSlide>
            ) : (
              <ThumbSlide key={i}></ThumbSlide>
            ),
          )}
        </Slider>
      </ThumbSlides>
    </Wrapper>
  );
};

export default Gallery;
