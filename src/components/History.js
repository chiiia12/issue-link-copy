import React from 'react'
import PropTypes from 'prop-types';
const History = ({ text, url }) => (
    <li>
        <a href={url}>
            {text}
        </a>
    </li>
)

History.PropTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
export default History