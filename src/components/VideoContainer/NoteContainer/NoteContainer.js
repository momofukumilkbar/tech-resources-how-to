import React from 'react'
import './NoteContainer.css'
import Note from './Note/Note'

const NoteContainer = ({ notes }) =>
  <div className='note-container'>
    {notes.map((note, index) =>
      <Note message={note.message} selected={note.selected} key={index} />
    )}
  </div>

export default NoteContainer
