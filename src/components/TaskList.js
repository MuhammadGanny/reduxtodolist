import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleTask, editTask, deleteTask } from '../actions';

const TaskList = ({ tasks, toggleTask, editTask, deleteTask }) => {
  const [editedTitle, setEditedTitle] = useState('');

  const handleEditStart = (taskId, taskTitle) => {
    setEditedTitle(taskTitle);
    editTask(taskId, taskTitle);
  };

  const handleEditSave = (taskId) => {
    editTask(taskId, editedTitle);
    setEditedTitle('');
  };

  return (
    <div className="task-list">
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              className="che"
              onChange={() => toggleTask(task.id)}
            />
            {task.editing ? (
              <input
                type="text"
                value={editedTitle}
                className="sv-bt"
                onChange={(e) => setEditedTitle(e.target.value)}
                onBlur={() => handleEditSave(task.id)}
              />
            ) : (
              task.title
            )}
            {task.editing ? (
              <button onClick={() => handleEditSave(task.id)} className="bt-tl">Save</button>
            ) : (
              <button onClick={() => handleEditStart(task.id, task.title)} className="bt-tl">Edit</button>
            )}
            <button onClick={() => deleteTask(task.id)} className="bt-tl">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
};

const mapDispatchToProps = {
  toggleTask,
  editTask,
  deleteTask
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);



// import React from 'react';
// import { connect } from 'react-redux';
// import { toggleTask, editTask, deleteTask } from '../actions';

// const TaskList = ({ tasks, toggleTask, editTask, deleteTask }) => {
//   return (
//     <div className="task-list">
//       <h2>Task List</h2>
//       <ul>
//         {tasks.map(task => (
//           <li key={task.id}>
//             <input
//               type="checkbox"
//               checked={task.completed}
//               onChange={() => toggleTask(task.id)}
//             />
//             {task.editing ? (
//               <input
//                 type="text"
//                 value={task.title}
//                 onChange={e => editTask(task.id, e.target.value)}
//               />
//             ) : (
//               task.title
//             )}
//             {task.editing ? (
//               <button onClick={() => editTask(task.id, task.title)}>Save</button>
//             ) : (
//               <button onClick={() => editTask(task.id, task.title)}>Edit</button>
//             )}
//             <button onClick={() => deleteTask(task.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const mapStateToProps = state => {
//   return {
//     tasks: state.tasks
//   };
// };

// const mapDispatchToProps = {
//   toggleTask,
//   editTask,
//   deleteTask
// };

// export default connect(mapStateToProps, mapDispatchToProps)(TaskList);




