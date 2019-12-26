import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import GlobalStyle from './assets/GlobalStyle';
import Join from './pages/Join';
import Chat from './pages/Chat';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Route exact path='/' component={Join} />
      <Route exact path='/chat' component={Chat} />
    </Router>
  );
}

export default App;