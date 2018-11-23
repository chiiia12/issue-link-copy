/*global chrome*/
import React from 'react';
import App from './components/App';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import todo from './reducers';
import {addTodo} from './actions';
import {addHistory} from './actions';

//initialize 
let store = createStore(todo)
store.dispatch(addTodo('Hello world'))
store.dispatch(addTodo('Hello React'))
chrome.history.search({
'text':''
},function(historyItems){
    for(var i = 0;i<historyItems.length;i++){
        console.log(historyItems[i])
        store.dispatch(addHistory(historyItems[i].title),historyItems[i].url)
    }
})
console.log(store.getState())

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
