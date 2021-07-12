
import React,{Component} from 'react';
import Todo from './Component/Todo/Todo';

import About from './Component/Todo/About/About';
import Header from './Component/Todo/Header/Header';
import  {BrowserRouter as Router,Route} from 'react-router-dom'
 class App extends Component {

      render() {
          return (
             <Router> 
                <Header />
               <Route path='/' exact component={Todo}/>
               <Route path='/about' component={About}/>
             </Router>

          )  
      }
  }
  
export default App;



    
  
  
         
 