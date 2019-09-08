import React, { Component } from 'react';
import{getItems,deleteItems} from '../actions/itemActions'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
class ShoppingList extends Component {

  
  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = id => {
    this.props.deleteItems(id);
  };

  render() {
      const {items } =this.props.item
      const {isAuthenticated}=this.props.auth
      
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className='shopping-list'>
            
            {items && items.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames='fade'>
                <ListGroupItem>
                  {isAuthenticated ?(<Button
                      className='remove-btn'
                      color='danger'
                      size='sm'
                      onClick={this.onDeleteClick.bind(this, _id)}
                    >
                      &times;
                    </Button>):null}
                    

                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    getItems:()=>dispatch(getItems()),
    deleteItems:(id)=>dispatch(deleteItems(id))
  }
}

const mapStateToProps = state => {
  return{
    item: state.item,
    auth:state.auth
  }
}
 


export default connect(
  mapStateToProps,
mapDispatchToProps
)(ShoppingList);
