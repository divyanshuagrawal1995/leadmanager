import React, { Component } from 'react';
import{Button,Modal,ModalHeader,ModalBody,Form,
FormGroup,Label,Input,NavLink,Alert} from 'reactstrap';
import {clearErrors} from '../../actions/errorAction';
import {login} from '../../actions/userAction'
import { connect } from 'react-redux';

 class SignIn extends Component {
     state={
         modal:false,
         email:'',
         password:'',
         msg:null
     }
         componentDidUpdate(prevProps)
         {

            const {error,isAuthenticated}=this.props;
            if(error!==prevProps.error)
            {
                if(error.id==='LOGIN_FAIL')
                {
                    this.setState({msg:error.msg.msg})
                }else{
                    this.setState({msg:null})
                }
            }
            if(this.state.modal)
            {
                if(isAuthenticated)
                {
                    this.toggle();
                }
            }


         }
     toggle=()=>{
         this.props.clearErrors()
         this.setState({
             modal:!this.state.modal
         })
     }
     onChange=e=>{
         this.setState({[e.target.name]:e.target.value})
     }
     onSubmit=(e)=>{
         e.preventDefault()
         const {email,password}=this.state;
         const user={
             email,
             password
         }
         this.props.login(user)
     }
    render() {
        return (
            <div>
                <NavLink onClick={this.toggle} href="#">
                    SignIn
                </NavLink>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>SignIn</ModalHeader>
                    <ModalBody>{this.state.msg ?(<Alert color="danger">{this.state.msg}</Alert>):null}
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                           

                          <Label for="email">Email</Label>
                            <Input 
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            className="mb-3"
                            onChange={this.onChange}/>


                      <Label for="password">Password</Label>
                            <Input 
                            type="password"
                            name="password"
                            id="password"
                            placeholder="password"
                            className="mb-3"
                            onChange={this.onChange}/>
                            <Button color='dark' style={{marginTop:'2rem'}} block>
                                SignIn
                            </Button>
                        </FormGroup>
                    </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}
const mapStateToProps=state=>{
    return{
        isAuthenticated:state.auth.isAuthenticated,
        error:state.error
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        login:(user)=>{dispatch(login(user))},
        clearErrors:()=>{dispatch(clearErrors())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (SignIn)
