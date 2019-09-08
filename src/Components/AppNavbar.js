import React,{Component ,Fragment} from 'react';
import {connect } from 'react-redux';
import Logout from './auth/Logout';
import Register from './auth/Register';
import Login from './auth/Sign';
import{
    Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  
} from 'reactstrap'

class AppNavbar extends Component{
  state={
      isOpen:false
    
  }
  toggle=()=>{
    this.setState({
      isOpen:!this.state.isOpen
    })
  }
  render(){
    const {isAuthenticated,user}=this.props.auth
    const authLinks=(
      <Fragment>
        <NavItem>
          <span className="navbar-text mr-3">
          <strong>{user ?`welcome ${user.name}`:''}</strong>
          </span>
        </NavItem>
        <NavItem>
        <Logout/>
        </NavItem>
      </Fragment>
    )
    const guestLinks=(
      <Fragment>
        <NavItem>
          <Register/>
        </NavItem>
        <NavItem>
          <Login/>
        </NavItem>
      </Fragment>
    )
    return(
      <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href="/">Shopping List</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
               {isAuthenticated ?authLinks:guestLinks}
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>

    )
    
  }
}
const mapStateToProps=state=>{
  return{
    auth:state.auth
  }
}
export default connect(mapStateToProps)(AppNavbar)