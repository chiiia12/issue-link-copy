import React from 'react'
import VisibleTodoList from '../containers/VisibleTodoList'
import VisibleHistoryList from '../containers/VisibleHistoryList'
import AddTodo from '../containers/AddTodo'

const App = () => (
  <div>
    {/* <AddTodo/>
    <VisibleTodoList/> */}
    <VisibleHistoryList/>
  </div>
)
export default App;
