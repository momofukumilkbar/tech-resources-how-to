import React from 'react'
import './NoteContainer.css'
import Note from './Note/Note'

const NoteContainer = ({ notes, onClick }) =>
  <div className='note-container'>
    {notes.map((note, index) =>
      <Note
        message={note.message}
        selected={note.selected}
        key={index}
        onClick={onClick}
      />
    )}
  </div>

export default NoteContainer

NoteContainer.defaultProps = {
  notes: []
}
