import React ,{Component} from 'react';
import './App.css';
import TodoItem from './componentB/TodoItem'; 
class App extends Component{      

  constructor(){
    super();
    this.state={
    todoItems:[ 
    {title:'di xem phim',isComplete:true},
    {title:'di choi'},
    {title:'di ve nha'} 
  ]
}}

  onItemClicked(item){//3.Handling events-setState
return (event)=>
{//console.log(item)
  const isComplete=item.isComplete; //trạng thái hiện tại
  const todoItems=this.state.todoItems;//hoặc có thể viết const{todoItems}=this.state;
  const index=todoItems.indexOf(item);//tìm index của thằng đang được click
this.setState({
  todoItems:[//tạo mảng mới
    ...todoItems.slice(0,index),  //từ đầu đến index
    {
      ...item,                 //object
      isComplete:!isComplete   //thêm cái này
    },
    ...todoItems.slice(index+1)   //từ index đến cuối
  ]
   });   
 };
}

render(){
  const{todoItems}=this.state;
  if(todoItems.length>0){        //2.Conditional rendering
    return (
<div className="App"> 
  {todoItems.map((item,index)=> 
   <TodoItem 
     key={index} 
     item={item} 
     onClick={this.onItemClicked(item)} />)  } 
  </div>
    );
  }
  else{
    return(<div className="App"> nothing here. </div>);
  }
}
 
}
 
export default App;     






          
        

        
        
          
          
        
        
  

          
        
      

          


