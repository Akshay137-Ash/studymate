import TaskCard from './TaskCard';

// Component for rendering the list of task cards or an empty state
function TaskList({ tasks, totalTaskCount, searchTerm, selectedFilter, onToggleComplete, onEdit, onDelete }) {
  // Empty state when there are no tasks matching criteria
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📂</div>
        {totalTaskCount === 0 ? (
          <div>
            <h4>No tasks yet!</h4>
            <p>You have a clean slate. Fill out the form above to plan your study session or assignment.</p>
          </div>
        ) : (
          <div>
            <h4>No matching tasks found</h4>
            <p>
              No tasks matched "{searchTerm || selectedFilter}". Try adjusting your search query or selecting "All".
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="task-list-grid">
      {tasks.map(function(task) {
        return (
          <TaskCard
            key={task.id}
            task={task}
            onToggleComplete={onToggleComplete}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
