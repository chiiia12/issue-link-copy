/*global chrome*/
import React from 'react';
import App from './components/App';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import historys from './reducers';
import { addHistory } from './actions';

//initialize 
let store = createStore(historys)
chrome.history.search({
    'text': ''
}, function (historyItems) {
    console.log(historyItems)
    for (var i = 0; i < historyItems.length; i++) {
        let isMatch = historyItems[i].url.match(/.*(github.com).+(issues).+/)
        console.log("isMatch is " + isMatch)
        if (isMatch!=null) {
            store.dispatch(addHistory(historyItems[i].title, historyItems[i].url))
        }
    }
})

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
