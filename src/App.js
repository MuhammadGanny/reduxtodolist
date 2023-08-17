import React from 'react';
import './index.css';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

function App() {
  return (
    <div className="App">
      <h1>Task Management System</h1>
      <TaskList />
      <AddTask />
    </div>
  );
}

export default App;




// import React from 'react';
// import './index.css';
// import TaskList from './components/TaskList';
// import AddTask from './components/AddTask';



// function App() {
//   return (
//     <div className="App">
//       <h1>Task Management System</h1>
//       <TaskList />
//       <AddTask />
//     </div>
//   );
// }

// export default App;
