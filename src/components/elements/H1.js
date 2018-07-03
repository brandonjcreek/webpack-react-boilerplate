import styled from 'styled-components';

const H1 = styled.h1`
  text-align: center;
  font-family: ${props => props.theme.font.header};
  font-weight: ${props => props.weight || props.theme.weight.bold};
  color: ${props => props.color || props.theme.dark};
`;

export default H1;
