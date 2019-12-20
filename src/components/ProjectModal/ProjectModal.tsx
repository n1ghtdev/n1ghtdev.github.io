import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Modal } from '../Modal';
import Container from '../Container';
import DemoIcon from '../../assets/svg/demo.svg';
import Gallery from './Gallery';
import ToolsIcons from '../../assets/svg/tools-icons.svg';
import useProject from '../../hooks/useProject';
import { getProjectById } from '../../store/selectors';
import { useStore } from '../../store';
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
  width: 100%;
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
  padding-right: 10px;
  overflow-y: scroll;
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #22222a;
  }

  &::-webkit-scrollbar {
    width: 4px;
    background-color: #22222a;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #d66853;
  }
`;

const Paragraph = styled.p`
  line-height: 26px;
`;

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 16px;
`;

const Buttons = styled.div`
  display: flex;
  max-width: 180px;
  width: 100%;
  justify-content: space-between;
  align-self: center;
  position: absolute;
  bottom: 35px;
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

const ProjectModal = (props: any) => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const { state } = useStore();
  const data = getProjectById(state, id);

  const closeModal = (e: any) => {
    e.stopPropagation();
    history.push('/');
  };
  return (
    <Modal closeModal={closeModal}>
      <ModalContainer>
        <Wrapper>
          <Gallery gallery={data?.images} />
          <Content>
            <Title>{data?.title}</Title>
            {/* <div style={{ display: 'flex', marginBottom: '10px' }}>
              {data?.tools.map(tool => (
                <svg style={{ width: '75px', height: '40px' }}>
                  <use xlinkHref={`${ToolsIcons}#${tool}`} />
                </svg>
              ))}
            </div> */}
            <Description>
              <Paragraph>{data?.description}</Paragraph>
            </Description>

            <Buttons>
              <DemoButton href={data?.demo}>demo</DemoButton>
              <SourceButton href={data?.code}>code</SourceButton>
            </Buttons>
          </Content>
        </Wrapper>
      </ModalContainer>
    </Modal>
  );
};

export default ProjectModal;
