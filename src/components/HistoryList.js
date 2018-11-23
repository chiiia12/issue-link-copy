import React from 'react'
import PropTypes from 'prop-types';
import History from './History'

const HistoryList= ({historys})=>(
    <ul>
        {historys.map((history)=>
       <History
       key={history.id}
       {...history}/> 
        )}
    </ul>
)
HistoryList.propTypes={
    historys:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
        test:PropTypes.string.isRequired,
    }).isRequired).isRequired
}
export default HistoryList 