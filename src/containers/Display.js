import Display from '../components/Display';
import { connect } from 'react-redux';


function mapStateToProps({ display }) {
    return { display }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);