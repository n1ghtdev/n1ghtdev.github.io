import React from 'react';
import styled from 'styled-components';
import stickybits from 'stickybits';

import Projects from '../Projects';
import Container from '../Container';
import { VerticalNavMenu, VerticalNavMenuItem } from '../NavMenu';
import A from '../A';

// reusable
const Wrapper = styled.section`
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

const ProjectsSection = () => {
  const [filter, setFilter] = React.useState('project');
  const [year, setYear] = React.useState('2019');

  React.useEffect(() => {
    stickybits('#sticky', {
      parentClass: '#sticky-parent',
      verticalPosition: 'top',
      stickyBitStickyOffset: 100,
    });
  }, []);
  return (
    <Wrapper>
      <FlexContainer id="sticky-parent">
        <NavWrapper id="sticky">
          <VerticalNavMenu>
            <VerticalNavMenuItem active={filter === 'project' && true}>
              <A onClick={() => setFilter('project')}>projects</A>
            </VerticalNavMenuItem>
            <VerticalNavMenuItem active={filter === 'experiment' && true}>
              <A onClick={() => setFilter('experiment')}>experiments</A>
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
        <Projects filter={filter} year={year} />
      </FlexContainer>
    </Wrapper>
  );
};

export default ProjectsSection;
