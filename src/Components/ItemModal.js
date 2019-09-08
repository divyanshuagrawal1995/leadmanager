import React, { Component } from 'react';
import{addItems} from '../actions/itemActions'
import{connect} from 'react-redux';
import{
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap'

 class itemModal extends Component {
    state={
        modal:false,
        name:''
    }
    toggle=()=>{
        this.setState({
            modal:!this.state.modal
        })

    }
    onChange=e=>{
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit=e=>{
        e.preventDefault()
        const newItem={
            name:this.state.name
        };
        this.props.addItem(newItem)
        this.toggle()
    }
    render() {
        const {isAuthenticated}=this.props
        return (
            <div>
                {isAuthenticated ?(<Button
                color="dark"
                style={{marginBottom:'2rem'}}
                onClick={this.toggle}>Add Item</Button>):(<h4 className='mb-3 ml-4'>Please Login To Manage</h4>)}
                
                <Modal
                isOpen={this.state.modal}
                toggle={this.toogle}>
                <ModalHeader toggle={this.toggle}>Add to Shopping List</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label for="item">Item</Label>
                            <Input
                            type="text"
                            name="name"
                            id="item"
                            placeholder="Add shopping item"
                            onChange={this.onChange}/>
                            <Button color="dark" style={{marginTop:'2rem'}} block>Add Item</Button>
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
        item:state.item,
        isAuthenticated:state.auth.isAuthenticated

    }
}
const mapDispatchToProps=dispatch=>{
    return{
        addItem:(item)=>{dispatch(addItems(item))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(itemModal)
