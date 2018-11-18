import React from 'react';
import App from './components/App';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import todo from './reducers';
import {addTodo} from './actions';
import createStore from './store';

let store = createStore(todo)
store.dispatch(addTodo('Hello world'))
store.dispatch(addTodo('Hello React'))
console.log(store.getState())

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
