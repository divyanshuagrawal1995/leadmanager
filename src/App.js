import React,{Component} from 'react';
import{Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './Components/AppNavbar';
import ShoppingList from './Components/ShoppingList';
import ItemModal from './Components/ItemModal';
import {loadUser} from './actions/userAction';
import {connect} from 'react-redux';

import './App.css';

class  App extends Component {
  componentDidMount(){
    this.props.loadUser()
  }
  render(){
  return (
     <div className="App">
             <AppNavbar/>
       <Container>
         <ItemModal/>
      <ShoppingList/>
      </Container>
    </div>
    
  );
}
}

const  mapDispatchToProps=dispatch=>{
  return{
    loadUser:()=>{dispatch(loadUser())}
  }
}
export default connect(null,mapDispatchToProps) (App);
