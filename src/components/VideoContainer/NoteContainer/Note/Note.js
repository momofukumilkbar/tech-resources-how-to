import React from 'react'
import './Note.css'

const Note = ({ message, selected, onClick }) => {
  const selectedClass = selected ? ' note-selected' : ''

  return <div
    id={message}
    className={'note' + selectedClass}
    onClick={onClick}
  >
    {message}
  </div>
}

export default Note
