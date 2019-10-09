import styled from 'styled-components';
import List from '../../../components/List';
import ListItem from '../../../components/ListItem';
import { device } from '../../../breakpoints';

const Skills = styled(List).attrs(() => ({
  FontSize: '1.125rem',
  LineHeight: '1.7',
}))`
  @media ${device.mobile} {
    font-size: 1rem;
    line-height: 1.7;
  }
`;

const SkillsItem = styled(ListItem)`
  &:before {
    content: '';
    display: inline-block;
    width: 32px;
    height: 2px;
    background: #fff;
    vertical-align: middle;
    margin: 0 10px;
  }
  @media ${device.mobile} {
    &:before {
      width: 16px;
      margin: 0 5px 0 0;
    }
  }
`;

Skills.Item = SkillsItem;

export default Skills;
