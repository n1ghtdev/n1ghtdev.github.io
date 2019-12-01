import React from 'react';
import styled from 'styled-components';
import { Modal, IModal } from '../Modal';
import Container from '../Container';
import DemoIcon from '../../assets/svg/demo.svg';
import Gallery from './Gallery';

import ToolsIcons from '../../assets/svg/tools-icons.svg';

type ProjectModalProps = {
  projectId: number | string;
};

const Wrapper = styled.div`
  display: flex;
  background-color: ${({ theme }: { theme: any }) => theme.modalBg};
  color: ${({ theme }: { theme: any }) => theme.modalText};
  width: calc(100% - 17px);
`;

const Content = styled.div`
  padding: 50px 25px 35px 0;
  display: flex;
  flex-flow: nowrap column;
`;

const ModalContainer = styled(Container)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 800px;
`;

const Description = styled.div`
  flex: 1;
  max-height: 500px;
  overflow-y: scroll;
`;

const Paragraph = styled.p`
  line-height: 26px;
`;

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 16px;
`;

const testData = {
  id: 0,
  title: 'Example test project #1',
  desc:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit.Quae eveniet magnam, eius aut dolorem laboriosam doloremque quibusdam, illum quasi blanditiis porro quisquam omnis quo unde. Lorem ipsum dolor sit amet consectetur adipisicing elit.Quae eveniet magnam, eius aut dolorem laboriosam doloremque quibusdam, illum quasi blanditiis porro quisquam omnis quo unde. Lorem ipsum dolor sit amet consectetur adipisicing elit.Quae eveniet magnam, eius aut dolorem laboriosam doloremque quibusdam, illum quasi blanditiis porro quisquam omnis quo unde.Lorem ipsum dolor sit amet consectetur adipisicing elit.Quae eveniet magnam, eius aut dolorem laboriosam doloremque quibusdam, illum quasi blanditiis porro quisquam omnis quo unde. Lorem ipsum dolor sit amet consectetur adipisicing elit.Quae eveniet magnam, eius aut dolorem laboriosam doloremque quibusdam, illum quasi blanditiis porro quisquam omnis quo unde. Lorem ipsum dolor sit amet consectetur adipisicing elit.Quae eveniet magnam, eius aut dolorem laboriosam doloremque quibusdam, illum quasi blanditiis porro quisquam omnis quo unde.Lorem ipsum dolor sit amet consectetur adipisicing elit.Quae eveniet magnam, eius aut dolorem laboriosam doloremque quibusdam, illum quasi blanditiis porro quisquam omnis quo unde. Lorem ipsum dolor sit amet consectetur adipisicing elit.Quae eveniet magnam, eius aut dolorem laboriosam doloremque quibusdam, illum quasi blanditiis porro quisquam omnis quo unde. Lorem ipsum dolor sit amet consectetur adipisicing elit.Quae eveniet magnam, eius aut dolorem laboriosam doloremque quibusdam, illum quasi blanditiis porro quisquam omnis quo unde.Lorem ipsum dolor sit amet consectetur adipisicing elit.Quae eveniet magnam, eius aut dolorem laboriosam doloremque quibusdam, illum quasi blanditiis porro quisquam omnis quo unde. Lorem ipsum dolor sit amet consectetur adipisicing elit.Quae eveniet magnam, eius aut dolorem laboriosam doloremque quibusdam, illum quasi blanditiis porro quisquam omnis quo unde. Lorem ipsum dolor sit amet consectetur adipisicing elit.Quae eveniet magnam, eius aut dolorem laboriosam doloremque quibusdam, illum quasi blanditiis porro quisquam omnis quo unde.Lorem ipsum dolor sit amet consectetur adipisicing elit.Quae eveniet magnam, eius aut dolorem laboriosam doloremque quibusdam, illum quasi blanditiis porro quisquam omnis quo unde. Lorem ipsum dolor sit amet consectetur adipisicing elit.Quae eveniet magnam, eius aut dolorem laboriosam doloremque quibusdam, illum quasi blanditiis porro quisquam omnis quo unde. Lorem ipsum dolor sit amet consectetur adipisicing elit.Quae eveniet magnam, eius aut dolorem laboriosam doloremque quibusdam, illum quasi blanditiis porro quisquam omnis quo unde.',
  img: [
    'https://i.imgur.com/FqRFkkq.jpg',
    'https://via.placeholder.com/1920x2000',
    'https://via.placeholder.com/636x555',
    'https://via.placeholder.com/979x755',
  ],
  type: 'projects',
  year: '2019',
  demo: '#website',
  code: '#',
  tools: ['react', 'redux', 'redux-saga', 'webpack', 'nodejs'],
};

const Buttons = styled.div`
  display: flex;
  max-width: 180px;
  width: 100%;
  justify-content: space-between;
`;

const SourceButton = styled.a`
  color: #fff;
  text-decoration: none;
  &:before {
    content: '</>';
    margin-right: 10px;
    font-size: 14px;
  }
`;

const DemoButton = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 30px;
  &:before {
    content: '';
    background: url(${DemoIcon}) no-repeat;
    margin-right: 10px;
    width: 20px;
    height: 12px;
    display: inline-block;
  }
`;

const ProjectModal = (props: ProjectModalProps & IModal) => {
  return (
    <Modal closeModal={props.closeModal} isOpen={props.isOpen}>
      <ModalContainer>
        <Wrapper>
          <Gallery gallery={testData.img} />
          <Content>
            <Title>{testData.title}</Title>
            <Description>
              <Paragraph>{testData.desc}</Paragraph>
            </Description>
            <div
              style={{ display: 'flex', height: '100px', marginTop: '50px' }}
            >
              {testData.tools.map(tool => (
                <svg style={{ width: '75px', height: '40px' }}>
                  <use xlinkHref={`${ToolsIcons}#${tool}`} />
                </svg>
              ))}
            </div>
            <Buttons>
              <DemoButton href={testData.demo}>demo</DemoButton>
              <SourceButton href={testData.code}>code</SourceButton>
            </Buttons>
          </Content>
        </Wrapper>
      </ModalContainer>
    </Modal>
  );
};

export default ProjectModal;
