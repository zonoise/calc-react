import EqualButton from '../components/EqualButton';
import { connect } from 'react-redux';
import { inputEqual } from '../actions/calc'


function mapStateToProps({ }) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        inputEqual() {
            dispatch(inputEqual())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EqualButton);