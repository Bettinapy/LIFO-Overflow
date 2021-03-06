import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    
    return {
        errors: state.errors.session.session_error,
        formType: 'login',
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        processForm: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);