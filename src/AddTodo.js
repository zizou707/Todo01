import React, { Component } from 'react'

export default class AddTodo extends Component {
    constructor(props){
        super(props)
       this.state={task:""} 
    }
   handleSubmit=(e)=> {
      e.preventDefault();
      if (this.state.task.trim()){
        this.props.addTodo(this.state.task)
        this.setState({task:""})
      }
    
   }
  render() {
    return (
     <form onSubmit={this.handleSubmit}>
         <input type="text" value={this.state.task} onChange={(e)=>this.setState({task:e.target.value})} placeholder="Add a new task" />
         <button type='Submit' >Add</button>
     </form>
    )
  }
}
