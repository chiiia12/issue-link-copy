import React from 'react'
import PropTypes from 'prop-types';
import History from './History'
import List from '@material-ui/core/List';
import { Divider } from '@material-ui/core';

const HistoryList = ({ historys }) => {
    if (historys.size === 0) {
        return (
            <p>There are no issues that you saw recently.</p>
        )
    } else {
        return (
            <List>
                {historys.map((history) =>
                    <div>
                        <History
                            key={history.id}
                            {...history} />
                        <Divider />
                    </div>
                )}
            </List>
        )

    }
}
HistoryList.propTypes = {
    historys: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        test: PropTypes.string.isRequired,
    }).isRequired).isRequired
}
export default HistoryList 