import StatsCard from './StatsCard';

// Dashboard component displaying student overview, statistics, and quick tasks
function Dashboard({ tasks, setActiveTab, onToggleComplete }) {
  // Simple derived statistics calculated from tasks
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(function(task) {
    return task.completed === true;
  });

  const pendingTasks = tasks.filter(function(task) {
    return task.completed === false;
  });

  const highPriorityTasks = tasks.filter(function(task) {
    return task.priority === 'High';
  });

  // Calculate percentage of completed tasks
  const completionPercentage = totalTasks > 0
    ? Math.round((completedTasks.length / totalTasks) * 100)
    : 0;

  // Get today's date in YYYY-MM-DD format to find tasks due today
  const todayDateString = new Date().toISOString().split('T')[0];

  const todayTasks = tasks.filter(function(task) {
    return task.dueDate === todayDateString;
  });

  // Get the most recently added tasks (latest 4)
  const recentTasks = tasks.slice().reverse().slice(0, 4);

  return (
    <div className="dashboard">
      {/* Welcome banner */}
      <section className="welcome-banner">
        <div className="welcome-text">
          <h2>Welcome back, Student! 👋</h2>
          <p>Here is your study overview and productivity progress for today.</p>
        </div>
        <div className="welcome-actions">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setActiveTab('tasks')}
          >
            + Add New Task
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setActiveTab('notes')}
          >
            + Create Note
          </button>
        </div>
      </section>

      {/* Statistics Cards Grid */}
      <section className="stats-grid">
        <StatsCard
          title="Total Tasks"
          value={totalTasks}
          subtitle="All recorded tasks"
          icon="📋"
          colorClass="stats-blue"
        />
        <StatsCard
          title="Completed"
          value={completedTasks.length}
          subtitle={`${completionPercentage}% completed`}
          icon="✅"
          colorClass="stats-green"
        />
        <StatsCard
          title="Pending"
          value={pendingTasks.length}
          subtitle="Needs attention"
          icon="⏳"
          colorClass="stats-orange"
        />
        <StatsCard
          title="High Priority"
          value={highPriorityTasks.length}
          subtitle="Urgent deadlines"
          icon="🔥"
          colorClass="stats-red"
        />
      </section>

      {/* Overall Progress Bar */}
      <section className="progress-section">
        <div className="progress-header">
          <div>
            <h3>Overall Study Progress</h3>
            <p className="section-subtitle">
              {completedTasks.length} of {totalTasks} tasks completed
            </p>
          </div>
          <span className="progress-percentage">{completionPercentage}%</span>
        </div>
        <div className="progress-bar-track">
          <div
            className="progress-bar-fill"
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
      </section>

      {/* Dashboard Lists: Today's Tasks and Recent Tasks */}
      <div className="dashboard-columns">
        {/* Today's Tasks Column */}
        <section className="dashboard-card">
          <div className="dashboard-card-header">
            <h3>📅 Due Today</h3>
            <span className="badge-count">{todayTasks.length}</span>
          </div>

          {todayTasks.length === 0 ? (
            <div className="empty-message-box">
              <p>🎉 No tasks due today! You're all caught up.</p>
            </div>
          ) : (
            <ul className="quick-task-list">
              {todayTasks.map(function(task) {
                return (
                  <li key={task.id} className={`quick-task-item ${task.completed ? 'completed' : ''}`}>
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => onToggleComplete(task.id)}
                      className="task-checkbox"
                    />
                    <div className="quick-task-details">
                      <span className="quick-task-title">{task.title}</span>
                      <span className={`badge badge-${task.priority.toLowerCase()}`}>
                        {task.priority}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </section>

        {/* Recent Tasks Column */}
        <section className="dashboard-card">
          <div className="dashboard-card-header">
            <h3>🕒 Recent Tasks</h3>
            <button
              type="button"
              className="link-btn"
              onClick={() => setActiveTab('tasks')}
            >
              View All Tasks &rarr;
            </button>
          </div>

          {recentTasks.length === 0 ? (
            <div className="empty-message-box">
              <p>No tasks added yet. Create one to get started!</p>
            </div>
          ) : (
            <ul className="quick-task-list">
              {recentTasks.map(function(task) {
                return (
                  <li key={task.id} className={`quick-task-item ${task.completed ? 'completed' : ''}`}>
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => onToggleComplete(task.id)}
                      className="task-checkbox"
                    />
                    <div className="quick-task-details">
                      <span className="quick-task-title">{task.title}</span>
                      <div className="quick-task-meta">
                        <span className="badge badge-category">{task.category}</span>
                        <span className="quick-task-date">Due: {task.dueDate || 'No date'}</span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
