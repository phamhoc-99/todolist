import React, { Component }  from 'react';
import './Todolist.css';   //import css

class Todolist extends Component {
    render(){

 //let className ='Todolist';
// const {item}=this.props;
// if(item.isComplete){className+=' Todolist-complete';}  //nhớ thêm dấu cách vào ,ko là nó gộp thành 1 class


        return (  
            <div className="Todolist">
                <p>{this.props.item}</p>       
            </div> 
            ); 
    }
}
export default Todolist;                              
