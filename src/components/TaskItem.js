import React, { useState } from 'react';

const TaskItem = ({ task, toggleTask, editTask, deleteTask }) => {
  const [editing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleToggle = () => {
    toggleTask(task.id);
  };

  const handleEdit = () => {
    if (editedText.trim() !== '') {
      editTask(task.id, editedText);
    }
    setEditing(false);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      {editing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onBlur={handleEdit}
          autoFocus
        />
      ) : (
        <div className="task-text">{task.text}</div>
      )}
      <div className="task-buttons">
        {!editing && (
          <>
            <button className="task-button" onClick={handleToggle}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button className="task-button edit-button" onClick={() => setEditing(true)}>
              Edit
            </button>
          </>
        )}
        <button className="task-button delete-button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
