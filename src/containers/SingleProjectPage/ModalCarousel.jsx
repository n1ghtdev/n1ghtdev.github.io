import React, { Component } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';

class ModalCarousel extends Component {
  render() {
    return (
      <ModalGateway>
        {this.props.isOpen ? (
          <Modal onClose={this.props.onClose} closeOnBackdropClick={true}>
            <Carousel
              views={this.props.images}
              currentIndex={this.props.currentIndex}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    );
  }
}

export default ModalCarousel;
