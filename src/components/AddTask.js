import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';

const AddTask = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (taskTitle.trim() !== '') {
      addTask(taskTitle);
      setTaskTitle('');
    }
  };

  return (
    <div className="add-task">
      <h2 className="add-heading">Add Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task title"
          value={taskTitle}
          onChange={e => setTaskTitle(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  addTask
};

export default connect(null, mapDispatchToProps)(AddTask);
