import React from 'react';

type Sections = string | null;

type SectionContextType = {
  activeSection: Sections;
  setActiveSection: React.Dispatch<any>;
};

type Props = {
  children: React.ReactNode;
};

const SectionContext = React.createContext<SectionContextType>({
  activeSection: null,
  setActiveSection: () => null,
});

export const SectionProvider = (props: Props) => {
  const [activeSection, setActiveSection] = React.useState();

  // const savedSetActiveSection = React.useCallback(setActiveSection, []);

  return (
    <SectionContext.Provider value={{ activeSection, setActiveSection }}>
      {props.children}
    </SectionContext.Provider>
  );
};

export const useSection = () => React.useContext(SectionContext);
