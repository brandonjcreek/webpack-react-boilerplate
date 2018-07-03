import styled from 'styled-components';

export default styled.div`
  background: ${props => props.theme.dark};
  text-align: center;
  color: ${props => props.theme.light};
  font-family: ${props => props.theme.font.body};
  padding: 2em;
`;
