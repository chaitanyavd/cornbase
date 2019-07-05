import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import NavBarContainer from '../navbar/navbar_container'
import {logout} from '../../actions/session_actions'



class Modal extends React.Component{
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
        this.props.logout().then(()=> this.props.closeModal())
    }

    render() {

        if (!this.props.modal) {
            return null;
        }
        
        let component;
        switch (this.props.modal) {
            case 'profileAvatar':
                component = <NavBarContainer />
                break;
            default:
                return null;
        }
        return (
            <div className="modal-background" onClick={this.props.closeModal}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    <button onClick={this.handleSubmit} >Logout</button>
                </div>
            </div>
        );   
    }
    
}


const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        logout: () => dispatch(logout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
