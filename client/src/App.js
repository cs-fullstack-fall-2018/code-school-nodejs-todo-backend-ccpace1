import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from "./ToDoList";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    username: "Cody",
                    todo: "learn code",
                    isDone: false
                },
                {
                    username: "Reco",
                    todo: "sleep in class",
                    isDone: false
                }
            ]
        }
    }

    render() {
      // let todoArray =[
      //     {
      //         username: "Cody",
      //         to do: "learn code",
      //         isDone: false
      //     },
      //     {
      //         username: "Reco",
      //         to do: "sleep in class",
      //         isDone: false
      //     }
      // ];
      fetch('api/todos/testuser')
          .then(data => data.json())
        .then(response => this.setState({data: response}));
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <ToDoList arr={this.state.data}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
