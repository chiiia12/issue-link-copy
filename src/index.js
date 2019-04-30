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
    maxResults: 100
}, function (historyItems) {
    	const result = historyItems.filter(onlyUnique).filter(onlyIssue);
	console.log("result")
	console.log(result)
	for (var i = 0; i < result.length; i++) {
        store.dispatch(addHistory(result[i].title, result[i].url))
    }
})
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function onlyIssue(value,index,self){
    return !value.url.endsWith('issues')
}

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
