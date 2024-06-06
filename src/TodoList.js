import React, { Component } from 'react'
import Todo from './Todo'

class TodosList  extends Component {
    



  render() {
    return (
      <ul >
        {this.props.todos.map((todo)=>(
            <Todo key={todo.id} task={todo.task}/>
        ))}
      </ul>
    )
  }
}
export default TodosList
