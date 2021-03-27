import React ,{Component} from 'react';
import './App.css';

import Todolist from './componentB/Todolist'; 

class App extends Component{      

  constructor(){
    super();
    this.Todolist=[ {title:'di xem phim',isComplete:true},
    {title:'di choi'},
    {title:'di chich'} ];
  }

render(){
  return (
  <div className="App"> {this.Todolist.map((item,index)=> 
                          <Todolist key={index} item={item.title}/>)  } </div>
    );
}
 
}
 
export default App;     






          
        

        
        
          
          
        
        
  

          
        
      

          


