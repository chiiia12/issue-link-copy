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
    'text': "/.*(github.com).+(issues/issues/).+/",
    maxResults: 1000
}, function (historyItems) {
    historyItems.filter(onlyUnique);
    for (var i = 0; i < historyItems.length; i++) {
        store.dispatch(addHistory(historyItems[i].title, historyItems[i].url))
    }
})
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
