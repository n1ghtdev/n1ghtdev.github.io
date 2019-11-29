import React from 'react';
import styled from 'styled-components';
import stickybits from 'stickybits';
import Container from '../../../views/Container';
import { VerticalNavMenu, VerticalNavMenuItem } from '../../../views/NavMenu';
import A from '../../../views/A';

import Gallery from './Gallery';

const Section = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
  min-height: 100vh;
`;

const FlexContainer = styled(Container)`
  display: flex;
  align-items: flex-start;
`;

const NavWrapper = styled.nav`
  flex: 1;
  margin-top: 20px;
`;

const Projects = () => {
  const [filter, setFilter] = React.useState('projects');
  const [year, setYear] = React.useState('2019');

  React.useEffect(() => {
    stickybits('#sticky', {
      parentClass: '#sticky-parent',
      verticalPosition: 'top',
      stickyBitStickyOffset: 100,
    });
  }, []);
  return (
    <Section>
      <FlexContainer id="sticky-parent">
        <NavWrapper id="sticky">
          <VerticalNavMenu>
            <VerticalNavMenuItem active={filter === 'projects' && true}>
              <A onClick={() => setFilter('projects')}>projects</A>
            </VerticalNavMenuItem>
            <VerticalNavMenuItem active={filter === 'experiments' && true}>
              <A onClick={() => setFilter('experiments')}>experiments</A>
            </VerticalNavMenuItem>
          </VerticalNavMenu>
          <VerticalNavMenu>
            <VerticalNavMenuItem active={year === '2019' && true}>
              <A onClick={() => setYear('2019')}>2019</A>
            </VerticalNavMenuItem>
            <VerticalNavMenuItem active={year === '2018' && true}>
              <A onClick={() => setYear('2018')}>2018</A>
            </VerticalNavMenuItem>
            <VerticalNavMenuItem active={year === '2017' && true}>
              <A onClick={() => setYear('2017')}>2017</A>
            </VerticalNavMenuItem>
          </VerticalNavMenu>
        </NavWrapper>
        <Gallery filter={filter} year={year} />
      </FlexContainer>
    </Section>
  );
};

export default Projects;
