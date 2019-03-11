import PlusButton from '../components/PlusButton';
import { connect } from 'react-redux';
import { inputPlus } from '../actions/calc'


function mapStateToProps({ }) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        inputPlus() {
            dispatch(inputPlus())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlusButton);