// Card component for displaying individual task information
function TaskCard({ task, onToggleComplete, onEdit, onDelete }) {
  return (
    <div className={`task-card ${task.completed ? 'task-completed' : ''}`}>
      <div className="task-card-header">
        <div className="task-badges">
          <span className="badge badge-category">{task.category}</span>
          <span className={`badge badge-${task.priority.toLowerCase()}`}>
            {task.priority} Priority
          </span>
        </div>
        <span className={`status-badge ${task.completed ? 'status-done' : 'status-pending'}`}>
          {task.completed ? '✓ Completed' : '⏳ Pending'}
        </span>
      </div>

      <div className="task-card-body">
        <h4 className="task-title">{task.title}</h4>
        {task.description && (
          <p className="task-description">{task.description}</p>
        )}
      </div>

      <div className="task-card-footer">
        <div className="task-due-date">
          <span className="date-icon">📅</span>
          <span>{task.dueDate ? `Due: ${task.dueDate}` : 'No due date'}</span>
        </div>

        <div className="task-actions">
          <button
            type="button"
            className={`btn btn-sm ${task.completed ? 'btn-warning' : 'btn-success'}`}
            onClick={() => onToggleComplete(task.id)}
            title={task.completed ? 'Mark as Pending' : 'Mark as Completed'}
          >
            {task.completed ? 'Mark Pending' : 'Mark Done'}
          </button>

          <button
            type="button"
            className="btn btn-sm btn-outline"
            onClick={() => onEdit(task)}
            title="Edit task"
          >
            ✏️ Edit
          </button>

          <button
            type="button"
            className="btn btn-sm btn-danger"
            onClick={() => onDelete(task.id)}
            title="Delete task"
          >
            🗑️ Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
