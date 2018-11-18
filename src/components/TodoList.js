import React from 'react'
import PropTypes from 'prop-types';
import Todo from './Todo'

const TodoList = ({todos})=>(
    <ul>
        {todos.map((todo)=>
       <Todo
       key={todo.id}
       {...todo}/> 
        )}
    </ul>
)
TodoList.propTypes={
    todos:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
        test:PropTypes.string.isRequired
    }).isRequired).isRequired
}
export default TodoList