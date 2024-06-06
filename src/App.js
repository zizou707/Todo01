import React, { Component } from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

export default class App extends Component {
     constructor(props){
        super(props)
       this.state={todos:[]} 
     }
addTodo=(task)=>{
  const newTodo={
    id:this.state.todos.length,
    task
  }
  this.setState({todos:[...this.state.todos,newTodo]})
}

  render() {
    return (
      <div>
         <h1>Todo App</h1>
         <AddTodo addTodo={this.addTodo}/>
         <TodoList todos={this.state.todos}/>
      </div>
    )
  }
}
