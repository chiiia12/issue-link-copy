import React from 'react'
import { connect } from 'react-redux'
import { searchIssue} from '../actions'

let AddTodo = ({ dispatch }) => {
    let input
    return (
        <div>
            <input ref={(node) => {
                input = node
            }} />
            <button onClick={() => {
                dispatch(searchIssue(input.value))
                input.value = ''
            }}>Add Todo</button>
        </div>
    )
}
AddTodo = connect()(AddTodo)
export default AddTodo