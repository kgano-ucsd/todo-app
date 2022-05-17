
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

class App extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          item: null,
          completed: false,
          toDoList: []
      };
  }

  handleItemInput = newItem => {
      this.setState({
          item: newItem
      });
  };

  updateToDoList = newItem => {
      this.setState({
          toDoList: [...this.state.toDoList, newItem]
      });
  };



  

  crossLine = event => {
      const element = event.target;
      element.classList.toggle("crossed-line");
  };

  render() {
      return (
          <div className='set-background'>
              <h1 className='todo-title'>KAMERON's TODO LIST</h1>
              <label className='nice-label'>To Do Item:</label>
              <input className='nice-label'
                  onChange={event =>
                      this.handleItemInput(event.target.value)
                      
                  }
              />
              <button
                  type="button" class="btn btn-primary" 
                  onClick={() =>
                      this.updateToDoList(this.state.item)
                  }
              >
                  <p>Add Item</p>
              </button>

              {this.state.toDoList.length === 0 && <p className='todo-items'>Please input a task.</p>}
              <p className='todo-items'>{this.state.item}</p>

              <div>
                <div className='todo-title'>
                <h3>To Do Items!</h3>
                </div>
                
        
                <div className='todo-items'>

                  {this.state.toDoList.map((item, index) => {
                      return (
                          <p onClick={this.crossLine} key={index}>
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
