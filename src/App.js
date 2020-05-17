import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Globalstyle } from './style';
import { IconFontStyle } from './statics/iconfont/iconfont';
import Header from './common/header';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Globalstyle />
        <IconFontStyle />
        <Header></Header>
      </Provider>
    )
  }
}

export default App;
