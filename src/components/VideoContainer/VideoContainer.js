import React, { Component } from 'react'
import HowToStartVideo from '../../assets/how-to-start.mov'
import './VideoContainer.css'
import NoteContainer from './NoteContainer/NoteContainer'

export default class VideoContainer extends Component {
  render() {
    return (
      <div className='content-container'>
        <div className='video-container' id='start-video-container'>
          <NoteContainer />
          <video
            id='how-start-video'
            src={HowToStartVideo}
            className='video'
            loop
          ></video>
        </div>
      </div>
    )
  }
}
