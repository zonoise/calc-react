import EqualButton from '../components/EqualButton';
import { connect } from 'react-redux';
import { inputEqual } from '../actions/calc'

function mapDispatchToProps(dispatch) {
    return {
        inputEqual() {
            dispatch(inputEqual())
        }
    }
}

export default connect(null, mapDispatchToProps)(EqualButton);