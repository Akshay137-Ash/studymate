import { useState } from 'react';
import NoteForm from './NoteForm';
import NoteCard from './NoteCard';

// NotesSection component coordinating note creation, editing, searching and listing
function NotesSection({ notes, onAddNote, onUpdateNote, onDeleteNote }) {
  const [editingNote, setEditingNote] = useState(null);
  const [noteSearch, setNoteSearch] = useState('');

  // Filter notes by search query on title or content
  const filteredNotes = notes.filter(function(note) {
    const query = noteSearch.toLowerCase();
    const matchesTitle = note.title.toLowerCase().includes(query);
    const matchesContent = note.content.toLowerCase().includes(query);
    return matchesTitle || matchesContent;
  });

  function handleStartEdit(note) {
    setEditingNote(note);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleSaveUpdatedNote(updatedNote) {
    onUpdateNote(updatedNote);
    setEditingNote(null);
  }

  function handleCancelEdit() {
    setEditingNote(null);
  }

  return (
    <div className="notes-section">
      <div className="section-header">
        <div>
          <h2>Study Notes</h2>
          <p className="section-subtitle">
            Jot down key takeaways, quick summaries, formulas, and revision reminders.
          </p>
        </div>
      </div>

      {/* Note creation / edit form */}
      <NoteForm
        key={editingNote ? editingNote.id : 'new'}
        onAddNote={onAddNote}
        onUpdateNote={handleSaveUpdatedNote}
        editingNote={editingNote}
        onCancelEdit={handleCancelEdit}
      />

      {/* Note search bar and count */}
      <div className="notes-toolbar">
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search notes by title or content..."
            value={noteSearch}
            onChange={(e) => setNoteSearch(e.target.value)}
            className="search-input"
          />
          {noteSearch && (
            <button
              type="button"
              className="clear-search-btn"
              onClick={() => setNoteSearch('')}
            >
              ✕
            </button>
          )}
        </div>
        <div className="notes-count">
          Showing <strong>{filteredNotes.length}</strong> of <strong>{notes.length}</strong> notes
        </div>
      </div>

      {/* Notes Grid or Empty State */}
      {filteredNotes.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">📝</div>
          {notes.length === 0 ? (
            <div>
              <h4>No notes created yet!</h4>
              <p>Keep your lecture takeaways organized. Write your first study note above.</p>
            </div>
          ) : (
            <div>
              <h4>No matching notes</h4>
              <p>No notes matched "{noteSearch}". Try searching with different keywords.</p>
            </div>
          )}
        </div>
      ) : (
        <div className="notes-grid">
          {filteredNotes.map(function(note) {
            return (
              <NoteCard
                key={note.id}
                note={note}
                onEdit={handleStartEdit}
                onDelete={onDeleteNote}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default NotesSection;
