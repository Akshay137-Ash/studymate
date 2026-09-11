import { useState } from 'react';

// Controlled form for adding and editing study notes
function NoteForm({ onAddNote, onUpdateNote, editingNote, onCancelEdit }) {
  const [title, setTitle] = useState(editingNote ? editingNote.title : '');
  const [content, setContent] = useState(editingNote ? editingNote.content : '');
  const [formError, setFormError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (title.trim() === '') {
      setFormError('Please provide a note title');
      return;
    }

    if (content.trim() === '') {
      setFormError('Please write some note content');
      return;
    }

    // Format current date nicely
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });

    if (editingNote) {
      const updatedNote = {
        ...editingNote,
        title: title.trim(),
        content: content.trim(),
        date: currentDate + ' (edited)'
      };
      onUpdateNote(updatedNote);
    } else {
      const newNote = {
        id: Date.now(),
        title: title.trim(),
        content: content.trim(),
        date: currentDate
      };
      onAddNote(newNote);
    }

    setTitle('');
    setContent('');
    setFormError('');
  }

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <div className="form-header">
        <h3>{editingNote ? '✏️ Edit Study Note' : '➕ Create New Study Note'}</h3>
        {editingNote && (
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
        <label htmlFor="note-title">Note Title *</label>
        <input
          id="note-title"
          type="text"
          placeholder="e.g. Operating Systems: Process vs Thread"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="note-content">Note Content *</label>
        <textarea
          id="note-content"
          rows="4"
          placeholder="Write your study notes, formulas, key ideas, or revision points here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="form-input form-textarea"
        ></textarea>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {editingNote ? 'Save Changes' : '+ Save Note'}
        </button>
        {editingNote && (
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

export default NoteForm;
