import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux';
import {logout} from '../../actions/userAction';
import {NavLink} from 'reactstrap';

 class Logout extends Component {
    render() {
        return (
            <Fragment>
                <NavLink onClick={this.props.logout} href='#'>
                    Logout
                </NavLink>
            </Fragment>
        )
    }
}
const mapDispatchToProps=dispatch=>{
    return {
        logout:()=>{dispatch(logout())}
    }

}
export default connect(null,mapDispatchToProps) (Logout)
