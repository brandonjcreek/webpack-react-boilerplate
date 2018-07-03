import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { injectGlobal, ThemeProvider } from 'styled-components';
import HelloWorld from './components/hello-world';
import Main from './components/elements/Main';
import P from './components/elements/P';
import A from './components/elements/A';
import theme from './theme';
import Clicker from './components/clicker';
import { Provider, connect } from 'react-redux';
import store from './store';

//  You can configure your global styles here
injectGlobal`
body{
  margin: 0;
  padding: 0;
}
`;

const App = props => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <>
        <HelloWorld title="React, Redux, Webpack Starter Project" />
        <Main>
          <P>
            This is a boilerplate to help you quickly get started with your
            React/Redux application. It comes preconfigured with{' '}
            <A href="#">React</A>, <A href="">Redux</A>, <A href="">Webpack</A>,{' '}
            <A href="">Babel 7</A>, <A href="">ESLint</A>, and supports Hot
            Reloading via <A href="">Webpack Serve</A>. It also comes bundled
            with <A href="">Styled Components</A>. <br />
            <strong> To get started, edit "/src/App.js"</strong>
          </P>
          <Clicker />
        </Main>
      </>
    </ThemeProvider>
  </Provider>
);

export default hot(module)(App);
