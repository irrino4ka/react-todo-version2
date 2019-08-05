import React, {Component} from 'react';
import {TodoBanner} from "./TodoBanner";
import {TodoCreator} from './TodoCreator';
import {TodoRow} from "./TodoRow";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Ira",
      todoItems: [
        {action: "Feed hamster", done: false},
        {action: "Feed kids", done: false},
        {action: "Finish react course", done: false},
        {action: "Buy new bag", done: true},
        {action: "Go to bed", done: false},
      ],
      //newItemText: ""
    }
  }

  updateNewTextValue = (event) => {
    this.setState({ newItemText: event.target.value});
  }
  createNewTodo = (task) => {
    if (!this.state.todoItems
        .find(item => item.action === task)) {
          this.setState({
            todoItems: [
              ...this.state.todoItems, 
              {action: task, done: false}
            ]
          })
        }
  }
  toggleTodo = (todo) => this.setState({
    todoItems: this.state.todoItems.map(item => item.action === todo.action ? {...item, done: !item.done} : item)
  })

  todoTableRows = () => this.state.todoItems.map(item => 
    <TodoRow key = {item.action} item = {item} callback = {this.toggleTodo} />
  )
  
  // changeStateData = () => {
  //   this.setState({
  //     userName: this.state.userName === 'Ira' ? 'Dima' : 'Ira'
  //   })
  // }

  render () {
    return (
      <div>
        <TodoBanner name = {this.state.userName} tasks = {this.state.todoItems} />
        <div className = "content-fluid">
          <TodoCreator callback = {this.createNewTodo}/>
          <table className = "table table-striped table-bordered">
            <thead>
              <tr><th>Descriprion</th><th>Done</th></tr>
            </thead>
            <tbody>
              {this.todoTableRows()}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
};
