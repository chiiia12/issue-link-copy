import { combineReducers } from "redux";
import todos from './todos'
import historys from './historys'

const todoApp = combineReducers({todos})
const historyApp = combineReducers({historys})
// export default todoApp
export default historyApp 
