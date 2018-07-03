import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.dark};
  height: 8em;
`;

export default Header;
