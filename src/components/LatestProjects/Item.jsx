import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = styled.div`
position: relative;
margin-top: 400px;
display: flex;
justify-content: space-between;
  /* ${({ Id }) => {
    if (Id % 2 === 0) {
      return `
        & > ${Container} {
          order: 2;
        }
      `;
    }
    return `
      & > ${Container} {
        order: 0;
      }
    `;
  }} */
`;

Item.propTypes = {
  children: PropTypes.any,
};

export default Item;
