import React from 'react';
import { FirebaseContext } from '../modules/Firebase';

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

// TODO: add Antd for form design
const Admin = () => {
  const { firebaseDB, storage }: any = React.useContext(FirebaseContext);
  // figure out how to upload poster and images in upload function
  // probably should pass arg to upload images or poster and then to req
  // or merge two and make as one req

  // save file to ref instead of state, we don't need to update ui on file uploads
  const imagesRef: any = React.useRef();
  const posterRef: any = React.useRef();

  // const [imagesLinks, setImagesLinks] = React.useState();

  // uploads images from input to state images
  const uploadImages = (event: React.ChangeEvent<HTMLElement>) => {
    const eventTarget = event.target as HTMLInputElement;

    if (eventTarget.name === 'poster') {
      posterRef.current = eventTarget.files && eventTarget.files[0];
    } else if (eventTarget.name === 'images') {
      imagesRef.current = eventTarget.files;
    }
  };
  // uploads images to firebase storage from images state (which is Files selected with input type file)
  // TODO: change function return type to anything but Promise
  // ...(because function return already resolved value)
  const uploadImagesToStorage = async (
    poster: File,
    images: FileList,
  ): Promise<any> => {
    // TODO: move thif function to separate file firebase.tsx / utils

    // TODO: handle error somewhere
    if (!poster || !images)
      throw new Error(
        'poster and images cannot be empty, please pass poster as single File and images as FileList',
      );

    // form array of promises
    const promises = [poster, ...Object.values(images)].map(async item => {
      const response = await storage
        .ref(item.name)
        .put(item)
        .then((snapshot: any) => snapshot.ref.getDownloadURL());
      return response;
    });

    // define first resolved promise as posterURL and rest will be images
    const [posterURL, ...rest] = await Promise.all(promises);

    // return as array for custom namings
    return [posterURL, rest];
  };
  // firebase test method which uploads inputs to db fb
  const addProject = async () => {
    const [poster, images] = await uploadImagesToStorage(
      posterRef.current,
      imagesRef.current,
    );

    const dbRef = firebaseDB.ref('/projects');

    try {
      await dbRef.push({ ...inputs, poster, images, type: 'project' });
    } catch (error) {
      console.error(error);
    }
  };

  // custom hook for form controlled inputs
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
          <label htmlFor="poster" style={{ display: 'block' }}>
            Poster
          </label>
          <input
            type="file"
            id="poster"
            name="poster"
            onChange={uploadImages}
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
