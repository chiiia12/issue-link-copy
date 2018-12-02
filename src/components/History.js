import React from 'react'
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import IconButton from '@material-ui/core/IconButton';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const History = ({ text, url }) => {
    return (
        <ListItem button onClick={() => {
            window.open(url)
        }}>
            <ListItemText primary={text} />
            <ListItemSecondaryAction>
                <CopyToClipboard onCopy={() => { }} text={url}>
                    <IconButton aria-label="Delete">
                        <FileCopyIcon />
                    </IconButton>
                </CopyToClipboard>
            </ListItemSecondaryAction>
        </ListItem>
    )
}
History.PropTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
export default History