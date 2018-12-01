import React from 'react'
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import IconButton from '@material-ui/core/IconButton';

const History = ({ text, url }) => (
    <ListItem button>
        <ListItemText primary={text} />
        <ListItemSecondaryAction>
            <IconButton aria-label="Delete">
            <FileCopyIcon/>
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>
)

History.PropTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
export default History