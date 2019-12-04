import React, { ChangeEvent } from 'react';
import { FirebaseContext } from '../modules/Firebase';
import styled from 'styled-components';
import Container from '../components/Container';
import DemoIcon from '../assets/svg/demo.svg';
import Gallery from '../components/ProjectModal/Gallery';

import ToolsIcons from '../assets/svg/tools-icons.svg';
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
  width: 32%;
`;

const ModalContainer = styled(Container)`
  height: 800px;
`;

const Description = styled.div`
  flex: 1;
  max-height: 500px;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const Paragraph = styled.p`
  line-height: 26px;
`;
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
const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 16px;
`;
const useForm = (cb: any) => {
  const [inputs, setInputs] = React.useState({});

  const onSubmit = (event: React.MouseEvent<HTMLElement>): void => {
    if (event) {
      event.preventDefault();
      cb();
    }
  };
  const onChange = (event: React.MouseEvent<HTMLElement>): void => {
    event.persist();
    const target = event.target as HTMLInputElement;
    setInputs(inputs => ({
      ...inputs,
      [target.name]: target.files ? target.files : target.value,
    }));
  };
  return {
    onSubmit,
    onChange,
    inputs,
  };
};

const Admin = () => {
  const { firebaseDB, storage }: any = React.useContext(FirebaseContext);
  const [images, setImages] = React.useState();
  const [imagesLinks, setImagesLinks] = React.useState();
  const uploadImages = (event: ChangeEvent<HTMLElement>) => {
    const eventTarget = event.target as HTMLInputElement;
    setImages(eventTarget.files);
  };
  const upload = async () => {
    const putImageInStorage = (item: any) => {
      return storage
        .ref(item.name)
        .put(item)
        .then((snapshot: any) => snapshot.ref.getDownloadURL());
    };

    const [...rest] = await Promise.all(
      Object.values(images).map((item: any) => putImageInStorage(item)),
    );
    setImagesLinks(rest);
    return rest;
  };
  const addProject = async () => {
    //'2019-12-29'.split('-').reverse().join('.')
    const imgs = images ? await upload() : null;
    const dbRef = firebaseDB.ref('/projects');
    try {
      await dbRef.push({ ...inputs, images: imgs });
    } catch (error) {
      console.error(error);
    }
  };
  const { inputs, onSubmit, onChange }: any = useForm(addProject);

  return (
    <>
      <form onSubmit={onSubmit} style={{ margin: '50px' }}>
        <div>
          <label htmlFor="title" style={{ display: 'block' }}>
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={onChange}
            value={inputs.title}
            required
          />
        </div>
        <div>
          <label htmlFor="description" style={{ display: 'block' }}>
            Description
          </label>
          <textarea
            id="description"
            name="description"
            onChange={onChange}
            rows={10}
            cols={50}
            value={inputs.description}
            required
          />
        </div>
        <div>
          <label htmlFor="year" style={{ display: 'block' }}>
            Year
          </label>
          <input
            type="text"
            id="year"
            name="year"
            onChange={onChange}
            value={inputs.year}
            required
          />
        </div>
        <div>
          <label htmlFor="tools" style={{ display: 'block' }}>
            Tools
          </label>
          <input
            type="text"
            id="tools"
            name="tools"
            onChange={onChange}
            value={inputs.tools}
            required
          />
        </div>
        <div>
          <label htmlFor="demo" style={{ display: 'block' }}>
            Demo/Website link
          </label>
          <input
            type="text"
            id="demo"
            name="demo"
            onChange={onChange}
            value={inputs.demo}
          />
        </div>
        <div>
          <label htmlFor="code" style={{ display: 'block' }}>
            Source code link
          </label>
          <input
            type="text"
            id="code"
            name="code"
            onChange={onChange}
            value={inputs.code}
          />
        </div>
        <div>
          <label htmlFor="images" style={{ display: 'block' }}>
            Images
          </label>
          <input
            type="file"
            id="images"
            name="images"
            onChange={uploadImages}
            multiple
          />
        </div>
        <button type="submit">ADD</button>
      </form>
      {/* <ModalContainer>
        <Wrapper>
          <Gallery gallery={imagesLinks} />
          <Content>
            <Title>{inputs.title}</Title>
            <Description>
              <Paragraph>{inputs.description}</Paragraph>
            </Description> */}
      {/* <div
            style={{ display: 'flex', height: '100px', marginTop: '50px' }}
          >
            {testData.tools.map(tool => (
              <svg style={{ width: '75px', height: '40px' }}>
                <use xlinkHref={`${ToolsIcons}#${tool}`} />
              </svg>
            ))}
          </div> */}
      {/* <Buttons>
              <DemoButton href="#">demo</DemoButton>
              <SourceButton href="#">code</SourceButton>
            </Buttons>
          </Content>
        </Wrapper>
      </ModalContainer> */}
    </>
  );
};

export default Admin;
