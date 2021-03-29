import React, { Component }  from 'react';
import './TodoItem.css';   //import css
class TodoItem extends Component {
 
render(){
  let className ='TodoItem';//1.thêm class dựa vào thuộc tính:dynamic class name
  const {item,onClick}=this.props;
if(item.isComplete){className+=' TodoItem-complete';}  //nhớ thêm dấu cách vào ,ko là nó gộp thành 1 class

        return (  
            <div onClick={onClick} className={className}>
                <p>{this.props.item.title}</p>       
            </div> 
            ); 
    }
}
export default TodoItem;                              
