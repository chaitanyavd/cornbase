import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import NavBarContainer from '../navbar/navbar_container'; 
import {logout} from '../../actions/session_actions'; 
import {withRouter} from "react-router-dom"; 


class Modal extends React.Component{
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
        this.props.logout().then(() => {
            this.props.history.push("/"); 
            this.props.closeModal(); 
        })
        
    }
        
    render() {

        if (!this.props.modal || !this.props.user) {
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
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className="modal-container">
                        <div className = "modal-user-container">
                            <div className = "modal-user-name">
                                {`${this.props.user.first_name} ${this.props.user.last_name} `}
                            </div>
                            <div className = "modal-user-email">
                                {this.props.user.email}
                            </div>
                        </div>
                        
                        <div className = "modal-logout-container">
                            <button className = "modal-logout-button" onClick={this.handleSubmit} >Sign out</button>
                        </div>
                    </div>

                </div>

            </div>
        );   
    }
    
}


const mapStateToProps = state => {
    let userId = state.session.id

    return {
        modal: state.ui.modal, 
        user: state.entities.users[userId]
    };

};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        logout: () => dispatch(logout())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));
