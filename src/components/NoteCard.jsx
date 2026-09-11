// Card component for displaying a study note
function NoteCard({ note, onEdit, onDelete }) {
  return (
    <div className="note-card">
      <div className="note-card-header">
        <h4 className="note-title">{note.title}</h4>
        <span className="note-date">🗓️ {note.date}</span>
      </div>

      <div className="note-card-body">
        <p className="note-content">{note.content}</p>
      </div>

      <div className="note-card-footer">
        <button
          type="button"
          className="btn btn-sm btn-outline"
          onClick={() => onEdit(note)}
          title="Edit note"
        >
          ✏️ Edit
        </button>
        <button
          type="button"
          className="btn btn-sm btn-danger"
          onClick={() => onDelete(note.id)}
          title="Delete note"
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}

export default NoteCard;
