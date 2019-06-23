import React from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import Image from './Image';
import ImageBox from './ImageBox';

import Row from '../../components/Row';
import Col from '../../components/Col';

/* prettier-ignore */
/* eslint-disable no-mixed-operators */
class Gallery extends React.Component {
  static propTypes = {
    images: PropTypes.array,
  };
  state = {
    isModalOpen: false,
    currentImageIndex: 0,
  };
  onClose = () => {
    this.setState({ isModalOpen: false });
  };
  openModal = selectedImageIndex => {
    this.setState({
      isModalOpen: true,
      currentImageIndex: selectedImageIndex,
    });
  };
  onMovePrev = () => {
    const { currentImageIndex } = this.state;
    const { images } = this.props;
    this.setState({
      currentImageIndex:
        (currentImageIndex + images.length - 1) % images.length,
    });
  };
  onMoveNext = () => {
    const { currentImageIndex } = this.state;
    const { images } = this.props;
    this.setState({
      currentImageIndex: (currentImageIndex + 1) % images.length,
    });
  };
  state = {};
  render() {
    const { isModalOpen, currentImageIndex } = this.state;
    const { images } = this.props;
    return (
      <React.Fragment>
        <Row Padding="50px 0 0 0">
          <ImageBox
            imgSrc={images[0].src}
            alt={images[0].alt}
            onClick={() => this.openModal(0)}
          />
        </Row>
        <Row justifyContent="space-between" Padding="50px 0 0 0">
          {images.length > 1
            ? images.slice(1, images.length).map((img, index) => (
              <Col
                xs={12}
                lg={6}
                Padding="10px"
                onClick={() => this.openModal(index + 1)}
                key={img.id}
              >
                <Image src={img.src} alt={img.alt} />
              </Col>
            ))
            : null}
          <React.Fragment>
            {isModalOpen ? (
              <Lightbox
                mainSrc={images[currentImageIndex].src}
                nextSrc={
                  images[(currentImageIndex + 1) % images.length].src
                }
                prevSrc={
                  images[
                    (currentImageIndex + images.length - 1) % images.length
                  ].src
                }
                onCloseRequest={this.onClose}
                onMovePrevRequest={this.onMovePrev}
                onMoveNextRequest={this.onMoveNext}
              />
            ) : null}
          </React.Fragment>
        </Row>
      </React.Fragment>
    );
  }
}

export default Gallery;
