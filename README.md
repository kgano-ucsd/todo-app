**Task: Todo List** File in src/App.js
Define Goals: 
- SELF IMPOSED ONE WEEK DEADLINES (SHOOT FOR COMPLETION BY MAY 12)
- Add to todo list via a textbox
- Remove from todo list
- Task should be crossed out / appear visually altered to signify completion
- Task should move to bottom of todo list
- If time allows, set up firebase

Research (These are the sources that I drew from directly):
- Setup: 
   - Install npm: https://nodejs.org/en/download/
   - React setup: https://reactjs.org/docs/create-a-new-react-app.html
Tutorials: 
- React JS Tutorial: https://www.youtube.com/watch?v=Ke90Tje7VS0&t=4728s
- Getting to know react: https://reactjs.org/tutorial/tutorial.html
- React JS Todo List Tutorial: https://www.youtube.com/watch?v=k195rHv8N-0
- This one was really bad, and hardly used any of the ideas here. I just needed a baseline upon which I could organize in my head how I was going to accomplish this task
- Mapping: https://reactjs.org/docs/lists-and-keys.html
- Commenting: https://stackoverflow.com/questions/30766441/how-to-use-comments-in-react

Bootstrap: https://getbootstrap.com/docs/4.1/getting-started/download/
- Buttons: https://www.codegrepper.com/code-examples/css/bootstrap+4+labels
- Styling: https://getbootstrap.com/docs/4.0/getting-started/theming/
CSS: Figured this out mostly by trial and error. Most things are pretty self-explanatory, however deeper research is needed to learn how to take advantage of CSS entirely.
- Toggling styles: https://devdojo.com/krissanawat101/3-ways-for-toggle-a-class-in-react
- Fitting a border around text: https://stackoverflow.com/questions/4689481/have-border-wrap-around-text

**Plan A**
Implement a Task Component:
- A remove button
- Remove button initiates a remove sequence that pushes the task to bottom of array
- Restyle to appear crossed out
- Displays name and task number gathered by user input
Main App
- Construct states for
- todoList array
- item
- Implement an input box, set item to user’s input, make it the name of a new Task object
- Calculate task # based on array index, make it the task # of the Task object
- Use map to display each task object on screen in a column
**Challenges:** 
- Successfully implementing a component 
- Altering state of component
- Implementing a remove button that achieved desired functionality
**Successes:**
- Can gather user input and add to array
- Display this array in a column

**Plan B - THIS WAS MY FINAL DESIGN. TODO LIST v1**
- Make main app that is also a component to get component functionality
- Have a column for active tasks and completed tasks
- Construct state of 
    - Item - the item to be gathered from user input
    - toDoList - stores each item
- Allow user to input task, set equal to item with an input handler
- Click a button that updates toDoList with the name of the item inputted by user
- When task is clicked, toggle strikeThrough styling that crosses out the task and moves it into a completed column
 **Assessing Successes / Fails - **
- Was unable to figure out how to make desired manipulations to the array
- Was unable to create a component that displays task and remove button as planned
- Nonetheless, created a functional todo list that makes sense for the user
- REALLY ENJOYED PLAYING AROUND WITH CSS!
- New way to be creative
- Started to develop a programming mindset for react – my ability to problem solve in this language still requires much more practice/improvement
- Forced me to think differently about coding
      - Experience up to this point was mainly in algorithms/using data structures efficiently
- Could not set up firebase - I got close, but a slew of midterms/assignments got in the way. Certainly “figure-outable”, just needed some more time. 



