import { createStore } from 'redux';
import reducer from './reducer';

const devToolState = (() => {
  if (process.env.NODE_ENV !== 'production') {
    return window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  }
})();

const store = createStore(reducer, devToolState);

export default store;
