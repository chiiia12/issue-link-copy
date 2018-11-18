import React from 'react'
import PropTypes from 'prop-types';
const Todo = ({ text }) => (
    <li>
        text
    </li>
)

Todo.PropTypes = {
    text: PropTypes.string.isRequired
}
export default Todo