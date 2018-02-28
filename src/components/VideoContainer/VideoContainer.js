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
    }
  }

  componentDidMount() {
    this.resetState()
  }

  componentWillUnmount() {
    this.video.removeEventListener('timeupdate', this.updateTime.bind(this))
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.video !== nextProps.video) {
      this.resetStateOnPropsChange(nextProps.video)
    }
  }

  resetStateOnPropsChange(video) {
    if (this.video) {
      if (!this.video.pause) {
        this.video.pause()
      }
      this.video.removeEventListener('timeupdate', this.updateTime.bind(this))
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

        this.video.addEventListener('timeupdate', this.updateTime.bind(this))
        this.video.addEventListener('ended', this.resetState.bind(this))
        video.playbackRate = 0.75;
        this.video.play()
      })
    })
  }

  resetState() {
    if (this.video) {
      if (!this.video.paused) {
        this.video.pause()
      }
      this.video.removeEventListener('timeupdate', this.handleTimeChange.bind(this))
    }
    const { video } = this.props
    const noteConstant = `${video.toUpperCase()
        .replace(/-/gi, '_')}_A_MEETING_NOTES`
    const notes = getMeetingNotes(noteConstant)

    this.setNotesAndVideo(notes, video)
  }

  handleTimeChange() {
    this.updateTime()
  }

  updateTime() {
    const { notes } = this.state
    const { currentTime, paused } = this.video

    if (!paused) {
      const newNotes = notes.map((note, index) => {
        if (currentTime >= note.startPoint && !note.selected) {
          this.video.pause()
          return { ...note, selected: true }
        } else {
          return note
        }
      })

      const stateSelected = this.state.notes.filter(note => note.selected).length
      const newSelected = newNotes.filter(note => note.selected).length

      if (stateSelected !== newSelected) {
        this.setState({
          ...this.state,
          notes: newNotes
        }, () => {
          if (this.video.paused) {
            this.video.play()
          }
        })
      }
    }
  }

  jumpToLocation(e) {
    const { notes } = this.state
    const { id:message } = e.target
    const note = notes.find(note => note.message === message)
    this.setState({
      ...this.state,
      notes: notes.map(note => ({...note, selected: false}))
    }, () => {
      this.video.currentTime = note.startPoint
    })
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
          <NoteContainer notes={this.state.notes} onClick={e => this.jumpToLocation(e)}/>
          <video
            id='video'
            src={videos[this.props.video]}
            className='video'
            preload='auto'
            ref={video => this.video = video}
          />
        </div>
      </div>
    )
  }
}
