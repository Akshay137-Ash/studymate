import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import TaskSection from './components/TaskSection';
import NotesSection from './components/NotesSection';
import './App.css';

// Initial sample tasks to display when user opens the app for the first time
function getInitialTasks() {
  const saved = localStorage.getItem('studymate_tasks');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to parse tasks from localStorage', e);
    }
  }

  // Today's date string in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  return [
    {
      id: 1,
      title: 'Complete Data Structures Lab Assignment',
      description: 'Implement binary search tree operations and write test cases.',
      category: 'Assignment',
      priority: 'High',
      dueDate: today,
      completed: false
    },
    {
      id: 2,
      title: 'Review Discrete Mathematics Chapter 4',
      description: 'Go over graph coloring and Euler paths before the quiz.',
      category: 'Study',
      priority: 'Medium',
      dueDate: today,
      completed: false
    },
    {
      id: 3,
      title: 'Submit Web Dev Project Milestone 1',
      description: 'Prepare responsive wireframes and project scope report.',
      category: 'Project',
      priority: 'High',
      dueDate: today,
      completed: true
    },
    {
      id: 4,
      title: 'Physics Midterm Formula Sheet',
      description: 'Summarize mechanics and thermodynamics equations on a single sheet.',
      category: 'Exam',
      priority: 'High',
      dueDate: '2026-09-20',
      completed: false
    },
    {
      id: 5,
      title: 'Organize study desk and semester notebooks',
      description: 'Clean workspace and label color-coded notebooks.',
      category: 'Personal',
      priority: 'Low',
      dueDate: '2026-09-25',
      completed: true
    }
  ];
}

// Initial sample notes to display when user opens the app for the first time
function getInitialNotes() {
  const saved = localStorage.getItem('studymate_notes');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to parse notes from localStorage', e);
    }
  }

  return [
    {
      id: 101,
      title: 'Algorithm Time Complexities',
      content: 'Binary Search: O(log n)\nMerge Sort: O(n log n)\nQuick Sort (avg): O(n log n)\nLinear Search: O(n)\nRemember that hash table lookups are O(1) on average.',
      date: 'Sep 10, 2026'
    },
    {
      id: 102,
      title: 'React Props vs State (Interview Note)',
      content: 'Props: Data passed from parent to child component (read-only).\nState: Internal data managed within a component that can change over time.\nBoth trigger a re-render when their values change.',
      date: 'Sep 11, 2026'
    },
    {
      id: 103,
      title: 'Database Normalization Steps',
      content: '1NF: Atomic values and unique column names.\n2NF: In 1NF and no partial dependencies on composite keys.\n3NF: In 2NF and no transitive dependencies between non-key attributes.',
      date: 'Sep 11, 2026'
    }
  ];
}

function App() {
  // Navigation state: 'dashboard' | 'tasks' | 'notes'
  const [activeTab, setActiveTab] = useState('dashboard');

  // Main task list state
  const [tasks, setTasks] = useState(getInitialTasks);

  // Main study notes state
  const [notes, setNotes] = useState(getInitialNotes);

  // Save tasks to localStorage whenever tasks state changes
  useEffect(function() {
    localStorage.setItem('studymate_tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Save notes to localStorage whenever notes state changes
  useEffect(function() {
    localStorage.setItem('studymate_notes', JSON.stringify(notes));
  }, [notes]);

  // ================= TASK HANDLERS =================

  // Add a new task to the list
  function handleAddTask(newTask) {
    // Add new task to the top of the array
    setTasks([newTask, ...tasks]);
  }

  // Update an existing task
  function handleUpdateTask(updatedTask) {
    const updatedTasks = tasks.map(function(task) {
      if (task.id === updatedTask.id) {
        return updatedTask;
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  // Delete a task by id
  function handleDeleteTask(taskId) {
    const remainingTasks = tasks.filter(function(task) {
      return task.id !== taskId;
    });
    setTasks(remainingTasks);
  }

  // Toggle completed status between true and false
  function handleToggleComplete(taskId) {
    const updatedTasks = tasks.map(function(task) {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  // ================= NOTE HANDLERS =================

  // Add a new study note
  function handleAddNote(newNote) {
    setNotes([newNote, ...notes]);
  }

  // Update an existing study note
  function handleUpdateNote(updatedNote) {
    const updatedNotes = notes.map(function(note) {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }
      return note;
    });
    setNotes(updatedNotes);
  }

  // Delete a note by id
  function handleDeleteNote(noteId) {
    const remainingNotes = notes.filter(function(note) {
      return note.id !== noteId;
    });
    setNotes(remainingNotes);
  }

  return (
    <div className="app-layout">
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        taskCount={tasks.length}
        noteCount={notes.length}
      />

      {/* Main Content Area: Conditional Rendering based on activeTab */}
      <main className="main-content">
        {activeTab === 'dashboard' && (
          <Dashboard
            tasks={tasks}
            setActiveTab={setActiveTab}
            onToggleComplete={handleToggleComplete}
          />
        )}

        {activeTab === 'tasks' && (
          <TaskSection
            tasks={tasks}
            onAddTask={handleAddTask}
            onUpdateTask={handleUpdateTask}
            onDeleteTask={handleDeleteTask}
            onToggleComplete={handleToggleComplete}
          />
        )}

        {activeTab === 'notes' && (
          <NotesSection
            notes={notes}
            onAddNote={handleAddNote}
            onUpdateNote={handleUpdateNote}
            onDeleteNote={handleDeleteNote}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>StudyMate &bull; Student Task & Study Planner &bull; Built with React & Vite</p>
      </footer>
    </div>
  );
}

export default App;
