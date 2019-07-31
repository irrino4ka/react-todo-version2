import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';

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
      newItemText: ""
    }
  }

  updateNewTextValue = (event) => {
    this.setState({ newItemText: event.target.value});
  }
  createNewTodo = () => {
    if (!this.state.todoItems
        .find(item => item.action === this.state.newItemText)) {
          this.setState({
            todoItems: [
              ...this.state.todoItems, 
              {action: this.state.newItemText, done: false}
            ],
            newItemText: ""
          })
        }
  }
  changeStateData = () => {
    this.setState({
      userName: this.state.userName === 'Ira' ? 'Dima' : 'Ira'
    })
  }
  toggleTodo = (todo) => this.setState({
    todoItems: this.state.todoItems.map(item => item.action === todo.action ? {...item, done: !item.done} : item)
  })
  todoTableRows = () => this.state.todoItems.map(item => {
    return (
      <tr key = {item.action}>
        <td>{item.action}</td>
        <td>
          <input type="checkbox" checked = {item.done}
            onChange = {() => this.toggleTodo(item)} />
        </td>
      </tr>
    )
  })

  render () {
    return (
      <div>
        <h4 className="bg-primary text-white text-center p-2">
        {this.state.userName}'s To Do List
        ({this.state.todoItems.filter(el => !el.done).length} items to do)
        </h4>
        <div className = "content-fluid">
          <div className = "my-1">
              <input className = "form-control"
              value= {this.state.newItemText}
              onChange = {this.updateNewTextValue}
              />
              <button className="btn btn-primary m-2"
              onClick ={this.createNewTodo}>
                Add new
              </button>
          </div>
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
