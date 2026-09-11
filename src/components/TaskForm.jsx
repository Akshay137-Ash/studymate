import { useState } from 'react';

// Form component for adding and editing tasks using controlled inputs
function TaskForm({ onAddTask, onUpdateTask, editingTask, onCancelEdit }) {
  // Initialize form state with editing values if editing, or default values if adding
  const [title, setTitle] = useState(editingTask ? editingTask.title : '');
  const [description, setDescription] = useState(editingTask ? (editingTask.description || '') : '');
  const [category, setCategory] = useState(editingTask ? (editingTask.category || 'Study') : 'Study');
  const [priority, setPriority] = useState(editingTask ? (editingTask.priority || 'Medium') : 'Medium');
  const [dueDate, setDueDate] = useState(editingTask ? (editingTask.dueDate || '') : '');
  const [formError, setFormError] = useState('');

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();

    // Simple validation
    if (title.trim() === '') {
      setFormError('Please enter a task title');
      return;
    }

    if (editingTask) {
      // Create updated task object
      const updatedTask = {
        ...editingTask,
        title: title.trim(),
        description: description.trim(),
        category: category,
        priority: priority,
        dueDate: dueDate
      };
      onUpdateTask(updatedTask);
    } else {
      // Create brand new task object
      const newTask = {
        id: Date.now(), // Generate unique id using current timestamp
        title: title.trim(),
        description: description.trim(),
        category: category,
        priority: priority,
        dueDate: dueDate,
        completed: false
      };
      onAddTask(newTask);
    }

    // Clear form fields
    setTitle('');
    setDescription('');
    setCategory('Study');
    setPriority('Medium');
    setDueDate('');
    setFormError('');
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-header">
        <h3>{editingTask ? '✏️ Edit Task' : '➕ Add New Task'}</h3>
        {editingTask && (
          <button
            type="button"
            className="btn btn-sm btn-outline"
            onClick={onCancelEdit}
          >
            Cancel Edit
          </button>
        )}
      </div>

      {formError && <p className="form-error-msg">{formError}</p>}

      <div className="form-group">
        <label htmlFor="task-title">Task Title *</label>
        <input
          id="task-title"
          type="text"
          placeholder="e.g. Read Physics Chapter 3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="task-desc">Description</label>
        <textarea
          id="task-desc"
          rows="2"
          placeholder="e.g. Solve end-of-chapter problems 1-10"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-input form-textarea"
        ></textarea>
      </div>

      <div className="form-row">
        <div className="form-group form-col">
          <label htmlFor="task-category">Category</label>
          <select
            id="task-category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-input"
          >
            <option value="Study">Study</option>
            <option value="Assignment">Assignment</option>
            <option value="Exam">Exam</option>
            <option value="Project">Project</option>
            <option value="Personal">Personal</option>
          </select>
        </div>

        <div className="form-group form-col">
          <label htmlFor="task-priority">Priority</label>
          <select
            id="task-priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="form-input"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="form-group form-col">
          <label htmlFor="task-due">Due Date</label>
          <input
            id="task-due"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="form-input"
          />
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {editingTask ? 'Save Changes' : '+ Add Task'}
        </button>
        {editingTask && (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onCancelEdit}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default TaskForm;
