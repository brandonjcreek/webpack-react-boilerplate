//  These are the core theme elements to the application.
//  To access any of these properties in a styled component
//  simply call ${props => props.theme.[element]}
//  Example for using "Dark" color ${props => props.theme.dark}
const theme = {
  dark: '#242424',
  light: '#DBD5B5',
  red: '#F8333C',
  green: '#44AF69',
  yellow: '#FCAB10',
  blue: '#2B9EB3',
  font: {
    header: '"Roboto", sans-serif',
    body: '"Roboto", sans-serif',
  },
  weight: {
    thin: '100',
    light: '300',
    regular: '400',
    medium: '500',
    bold: '700',
    black: '900',
  },
};

export default theme;
