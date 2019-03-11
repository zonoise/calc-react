import NumberButton from '../components/NumberButton';
import { connect } from 'react-redux';
import { inputNumber } from '../actions/calc'


function mapDispatchToProps(dispatch) {
    return {
        inputNumber(number) {
            dispatch(inputNumber(number))
        }
    }
}

export default connect(null, mapDispatchToProps)(NumberButton);