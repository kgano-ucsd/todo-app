
import React from 'react';
import ReactDOM from "react-dom";
import './App.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgGqJco7KxMw-4aOmKuTUZiLU-ca5GyGo",
  authDomain: "kameron-s-to-do-list.firebaseapp.com",
  projectId: "kameron-s-to-do-list",
  storageBucket: "kameron-s-to-do-list.appspot.com",
  messagingSenderId: "531222523799",
  appId: "1:531222523799:web:1fa6692c263fff7a9a9ed2",
  measurementId: "G-QF1REN4H65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// React code for an app that represents a todo list
// Users can add and cross of tasks as desired.
class App extends React.Component {
    /**
    * Contructor for states of 2 variables:
    * @param item - represents each task in todo list
    * @param toDoList - stores each task as an array
    */
  constructor(props) {
      super(props);

      this.state = {
          item: null,
          toDoList: []
      };
  }
  
  /**
   * States the state of item to the user's 
   * input
   * 
   * @param {newItem} newItem - Task the user would like
   * to complete
   */
  handleItemInput = newItem => {
      this.setState({
          item: newItem
      });
  };

  /**
   * Updates to do list with newItem, i.e. the task
   * the the user wishes to add to the todo list
   * 
   * @param {newItem} newItem - item to be
   * added to todo-list
   */
  updateToDoList = newItem => {
      this.setState({
          toDoList: [...this.state.toDoList, newItem]
      });
  };

  /**
   * When a user clicks
   * on todolist item, the task becomes crossed out,
   * bolded, italicized, and moves to indicate it has 
   * been completed. This method toggles this effect
   * 
   * @param {event} event - onClick
   */
  strikeThrough = event => {
      const element = event.target;
      element.classList.toggle("strikeThrough");
  };

  render() {
      return (
          <div className='App-header'> 
              <h1 className='todo-title'>KAMERON's TODO LIST</h1>
              <label className='nice-label'>To Do Item:</label>

              {/* Initializes user input and sets it as the item to be added */}

              <input className='nice-label'
                  onChange={event =>
                      this.handleItemInput(event.target.value)
                      
                  }
              />
              {/* Updates to do list with inputted item on click of button */}
              <button
                  type="button" class="btn btn-primary" 
                  onClick={() =>
                      this.updateToDoList(this.state.item)
                  }
              >
                  <p>Add Item</p>
              </button>
              {/* If the input box is empty, remind user to input a task */}
              {this.state.toDoList.length === 0 && 
              <p className='todo-items'>Please input a task, or remove a task by clicking on it.</p>}
              <p className='todo-items'>{this.state.item}</p>

              <div>
                <div className='todo-title'>
                <h3 >To Do Items! ---------- C O M P L E T E D!</h3>
                </div>
                
        
                <div className='todo-items'>
                  {/* Map each item to an index in a column on screen */}
                  {this.state.toDoList.map((item, index) => {
                      /* If item is clicked, toggle the strikethrough styling */
                      /* Also display Task number and the task itself on screen */
                      return (
                          <p onClick={this.strikeThrough} key={index}>
                              {"Task " + (index + 1) + ".    "}{item}{" "}
                          </p>
                      );
                  })}
                </div>
              </div>
          </div>
      );
  }
}
export default App;
