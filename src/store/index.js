import { createStore, applyMiddleware,compose } from "redux";
import reducers from '../reducers'
import thunk from 'redux-thunk'

const middleware = [thunk]
export default createStore(reducers, compose(applyMiddleware(...middleware)))