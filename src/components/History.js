import React from 'react'
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';

const History = ({ text, url }) => (
    <ListItem button>
        <ListItemIcon>
            <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={text} />
    </ListItem>
)

History.PropTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
export default History