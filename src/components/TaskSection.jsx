import { useState } from 'react';
import TaskForm from './TaskForm';
import TaskFilter from './TaskFilter';
import TaskList from './TaskList';

// TaskSection component coordinating form, search, filter, and task listing
function TaskSection({ tasks, onAddTask, onUpdateTask, onDeleteTask, onToggleComplete }) {
  // State for search query and active filter
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  // State for which task is currently being edited (null when adding)
  const [editingTask, setEditingTask] = useState(null);

  // Filter tasks based on both search query and selected filter
  const filteredTasks = tasks.filter(function(task) {
    // Check if title matches search input (case-insensitive)
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase());

    // Check filter selection
    let matchesFilter = true;

    if (selectedFilter === 'Pending') {
      matchesFilter = task.completed === false;
    } else if (selectedFilter === 'Completed') {
      matchesFilter = task.completed === true;
    } else if (selectedFilter === 'High Priority') {
      matchesFilter = task.priority === 'High';
    } else if (selectedFilter !== 'All') {
      // For category filters: Study, Assignment, Exam, Project, Personal
      matchesFilter = task.category === selectedFilter;
    }

    // Return true only if both search and filter match
    return matchesSearch && matchesFilter;
  });

  // Handler when user starts editing a task
  function handleStartEdit(task) {
    setEditingTask(task);
    // Scroll smoothly to form so student can see it easily
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Handler when edited task is submitted
  function handleSaveUpdatedTask(updatedTask) {
    onUpdateTask(updatedTask);
    setEditingTask(null);
  }

  // Handler when edit is cancelled
  function handleCancelEdit() {
    setEditingTask(null);
  }

  return (
    <div className="task-section">
      <div className="section-header">
        <div>
          <h2>Task Management</h2>
          <p className="section-subtitle">
            Plan, organize, and track your assignments, exams, and study goals.
          </p>
        </div>
      </div>

      {/* Task input / edit form */}
      <TaskForm
        key={editingTask ? editingTask.id : 'new'}
        onAddTask={onAddTask}
        onUpdateTask={handleSaveUpdatedTask}
        editingTask={editingTask}
        onCancelEdit={handleCancelEdit}
      />

      {/* Search and Filters */}
      <TaskFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
      />

      {/* List count summary */}
      <div className="task-summary-bar">
        <span>
          Showing <strong>{filteredTasks.length}</strong> of <strong>{tasks.length}</strong> tasks
          {selectedFilter !== 'All' && ` (Filter: ${selectedFilter})`}
          {searchTerm && ` (Search: "${searchTerm}")`}
        </span>
      </div>

      {/* Task cards grid */}
      <TaskList
        tasks={filteredTasks}
        totalTaskCount={tasks.length}
        searchTerm={searchTerm}
        selectedFilter={selectedFilter}
        onToggleComplete={onToggleComplete}
        onEdit={handleStartEdit}
        onDelete={onDeleteTask}
      />
    </div>
  );
}

export default TaskSection;
