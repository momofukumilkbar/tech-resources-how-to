import React, { Component } from 'react'
import HowToStartVideo from '../../assets/how-to-start.mov'
import HowToJoinVideo from '../../assets/how-to-join.mov'

import './VideoContainer.css'
import NoteContainer from './NoteContainer/NoteContainer'
import { getMeetingNotes } from '../../constants/noteConstants'
import { HOW_TO_START_A_MEETING, HOW_TO_JOIN_A_MEETING } from '../../constants/videoConstants'

export default class VideoContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      video: null
    }
  }

  componentDidMount() {
    this.resetState()
  }

  componentWillUnmount() {
    this.state.video.removeEventListener('timeupdate', this.updateTime.bind(this))
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.video !== nextProps.video) {
      this.resetStateOnPropsChange(nextProps.video)
    }
  }

  resetStateOnPropsChange(video) {
    if (this.state.video) {
      this.state.video.pause()
      this.state.video.removeEventListener('timeupdate', this.updateTime.bind(this))
    }
    const noteConstant = `${video.toUpperCase()
        .replace(/-/gi, '_')}_A_MEETING_NOTES`
    const notes = getMeetingNotes(noteConstant)

    this.setNotesAndVideo(notes, video)
  }

  setNotesAndVideo(notes, video) {
    this.setState({notes}, () => {
      const video = document.getElementById('video')

      this.setState({ video }, () => {

        this.state.video.addEventListener('timeupdate', this.updateTime.bind(this))
        this.state.video.addEventListener('ended', this.resetState.bind(this))
        video.playbackRate = 0.5;
        this.state.video.play()
      })
    })
  }

  resetState() {
    if (this.state.video) {
      if (!this.state.video.paused) {
        this.state.video.pause()
      }
      this.state.video.removeEventListener('timeupdate', this.updateTime.bind(this))
    }
    const { video } = this.props
    const noteConstant = `${video.toUpperCase()
        .replace(/-/gi, '_')}_A_MEETING_NOTES`
    const notes = getMeetingNotes(noteConstant)

    this.setNotesAndVideo(notes, video)
  }

  updateTime() {
    const { video, notes } = this.state
    const { currentTime, paused } = video
    console.log(currentTime)
    if (!paused) {
      const newNotes = notes.map((note, index) => {
        if (currentTime >= note.startPoint && !note.selected) {
          video.pause()
          return {
            ...note,
            selected: true
          }
        } else {
          return note
        }
      })

      const stateSelected = this.state.notes.filter(note => note.selected).length
      const newSelected = newNotes.filter(note => note.selected).length

      if (stateSelected !== newSelected) {
        this.setState({
          notes: newNotes
        }, () => {
          if (this.state.video.paused) {
            this.state.video.play()
          }
        })
      }
    }
  }

  render() {
    const videos = {
      [HOW_TO_START_A_MEETING]: HowToStartVideo,
      [HOW_TO_JOIN_A_MEETING]: HowToJoinVideo
    }

    return (
      <div className='content-container'>
        <div
          className='video-container'
          id='start-video-container'
        >
          <NoteContainer notes={this.state.notes}/>
          <video
            id='video'
            src={videos[this.props.video]}
            className='video'
            preload='auto'
          />
        </div>
      </div>
    )
  }
}
