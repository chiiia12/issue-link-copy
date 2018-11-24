import { connect } from 'react-redux'
import HistoryList from '../components/HistoryList'

const mapStateToProps = (state) => {
    return { historys: state.historys }
}
const VisibleHistoryList = connect(
    mapStateToProps
)(HistoryList)
export default VisibleHistoryList