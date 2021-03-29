import React ,{Component} from 'react';
import './App.css';
import TodoItem from './componentB/TodoItem'; 
import tick from './img/tick.svg';
class App extends Component{      

  constructor(){
    super();
    this.state={
      newItems:'',   //quản lí state khi nhập xong input sẽ clear
   
      todoItems:[ 
    {title:'di xem phim',isComplete:true},
    {title:'di choi'},
    {title:'di ve nha'} 
  ]
}
this.onKeyUp=this.onKeyUp.bind(this);//xử lí lỗi this undefine:trong constructer
this.onChange=this.onChange.bind(this);
}

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

onKeyUp(event){
if(event.keyCode===13){
let text=event.target.value;
if(!text){return;}

text=text.trim();
if(!text){return;}

this.setState({
 newItem:'', //đặt lại input khi nhập xong
  todoItems:[
    {title:text,isComplete:false},
    ...this.state.todoItems
  ]
});}


}
//xử lí sự kiện khi click:keyCode nút enter là 13,
//event.target:cái đang được trỏ ,
//event.target.value:giá trị đang viết
onChange(event){
  this.setState({
    newItem: event.target.value
 });
}

render(){
  const{todoItems,newItem}=this.state;//quản lí state
  if(todoItems.length>0){        //2.Conditional rendering
    return (
<div className="App"> 
<div className="Header">
<img src={tick} width={32} height={32} />
<input 
  type="text" 
  placeholder="Add a new item" 
  value={newItem}//value và onChange phải đi cùng nhau
  onChange={this.onChange}
  onKeyUp={this.onKeyUp} />
</div>
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






          
        

        
        
          
          
        
        
  

          
        
      

          


