// Navigation bar component
function Navbar({ activeTab, setActiveTab, taskCount, noteCount }) {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand" onClick={() => setActiveTab('dashboard')}>
          <span className="brand-icon">📚</span>
          <span className="brand-name">StudyMate</span>
          <span className="brand-tagline">Student Planner</span>
        </div>

        <nav className="navbar-links">
          <button
            type="button"
            className={`nav-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            📊 Dashboard
          </button>
          <button
            type="button"
            className={`nav-btn ${activeTab === 'tasks' ? 'active' : ''}`}
            onClick={() => setActiveTab('tasks')}
          >
            ✅ Tasks {taskCount > 0 && <span className="nav-badge">{taskCount}</span>}
          </button>
          <button
            type="button"
            className={`nav-btn ${activeTab === 'notes' ? 'active' : ''}`}
            onClick={() => setActiveTab('notes')}
          >
            📝 Notes {noteCount > 0 && <span className="nav-badge">{noteCount}</span>}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
