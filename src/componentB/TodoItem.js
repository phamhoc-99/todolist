import React, { Component }  from 'react';
import './TodoItem.css';   //import css
import checkImg from'../img/check.svg';
import checkCompleteImg from '../img/check-complete.svg';
class TodoItem extends Component {
 
render(){
  let className ='TodoItem';//1.thêm class dựa vào thuộc tính:dynamic class name
  const {item,onClick}=this.props;

  let url=checkImg;
if(item.isComplete){
  url=checkCompleteImg;
}

if(item.isComplete){className+=' TodoItem-complete';}  //nhớ thêm dấu cách vào ,ko là nó gộp thành 1 class

        return (  
            <div  className={className}>
                <img onClick={onClick} src={url} width={32} height={32} />  
                <p>{this.props.item.title}</p>       
            </div> 
            ); 
    }
}
export default TodoItem;                              
