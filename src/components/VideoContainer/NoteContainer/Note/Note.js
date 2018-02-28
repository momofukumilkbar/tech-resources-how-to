import React from 'react'
import './Note.css'

const Note = ({ message, selected }) => {
  const selectedClass = selected ? ' note-selected' : ''

  return <div className={'note' + selectedClass}>{message}</div>
}

export default Note
