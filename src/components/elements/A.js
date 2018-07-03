import styled from 'styled-components';

const A = styled.a`
  text-align: center;
  width: ${props => props.width || '100%'};
  font-family: ${props => props.theme.font.header};
  font-weight: ${props => props.weight || props.theme.weight.regular};
  color: ${props => props.color || props.theme.blue};
`;

export default A;
