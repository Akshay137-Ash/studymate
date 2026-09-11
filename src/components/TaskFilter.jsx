// Component for searching by title and filtering tasks by status, priority, or category
function TaskFilter({ searchTerm, onSearchChange, selectedFilter, onFilterChange }) {
  // List of all filter options
  const filterOptions = [
    'All',
    'Pending',
    'Completed',
    'High Priority',
    'Study',
    'Assignment',
    'Exam',
    'Project',
    'Personal'
  ];

  return (
    <div className="task-filter-container">
      {/* Search Bar */}
      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search tasks by title..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
        {searchTerm && (
          <button
            type="button"
            className="clear-search-btn"
            onClick={() => onSearchChange('')}
            title="Clear search"
          >
            ✕
          </button>
        )}
      </div>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <span className="filter-label">Filter:</span>
        <div className="filter-pills">
          {filterOptions.map(function(option) {
            return (
              <button
                key={option}
                type="button"
                className={`filter-pill ${selectedFilter === option ? 'active' : ''}`}
                onClick={() => onFilterChange(option)}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TaskFilter;
