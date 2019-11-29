import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { Modal, IModal } from '../../../views/Modal';
import Container from '../../../views/Container';

type ProjectModalProps = {
  projectId: number | string;
};

const Wrapper = styled.div`
  background-color: ${({ theme }: { theme: any }) => theme.modalBg};
  color: ${({ theme }: { theme: any }) => theme.modalText};
  width: calc(100% - 17px);
`;

const Gallery = styled.div`
  width: 68%;
  padding: 25px 30px;
`;
const ThumbSlides = styled.div`
  margin-right: -18px;
`;
const ThumbPhoto = styled.div`
  padding-right: 20px;
  & > img {
    width: 100%;
    height: 176px;
    border-radius: 5px;
    object-fit: cover;
  }
`;

const Slides = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

const Photo = styled.div`
  & > img {
    width: 100%;
    height: 560px;
    border-radius: 5px;
    object-fit: cover;
  }
`;

const ModalContainer = styled(Container)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 800px;
`;

const testData = {
  id: 0,
  title: 'project 1',
  img: [
    'https://i.imgur.com/FqRFkkq.jpg',
    'https://via.placeholder.com/1920x2000',
    'https://via.placeholder.com/636x555',
    'https://via.placeholder.com/979x755',
  ],
  type: 'projects',
  year: '2019',
};

const ProjectModal = (props: ProjectModalProps & IModal) => {
  const primarySliderRef: any = React.useRef(undefined);
  const secondarySliderRef: any = React.useRef(undefined);

  return (
    <Modal closeModal={props.closeModal} isOpen={props.isOpen}>
      <ModalContainer>
        <Wrapper>
          <Gallery>
            <Slides>
              <Slider
                ref={primarySliderRef}
                asNavFor={secondarySliderRef.current}
                slidesToShow={1}
                arrows={false}
                fade={true}
                infinite={false}
              >
                {testData.img.map((item, i) => (
                  <Photo key={i}>
                    <img src={item} alt={testData.title} />
                  </Photo>
                ))}
              </Slider>
            </Slides>
            <ThumbSlides>
              <Slider
                ref={secondarySliderRef}
                asNavFor={primarySliderRef.current}
                slidesToShow={3}
                arrows={false}
                focusOnSelect={true}
                infinite={false}
              >
                {testData.img.map((item, i) => (
                  <ThumbPhoto key={i}>
                    <img src={item} alt={testData.title} />
                  </ThumbPhoto>
                ))}
              </Slider>
            </ThumbSlides>
          </Gallery>
        </Wrapper>
      </ModalContainer>
    </Modal>
  );
};

export default ProjectModal;
