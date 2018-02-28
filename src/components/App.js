import React, { Component } from 'react'
import './App.css'
import VideoContainer from './VideoContainer/VideoContainer.js'
import { HOW_TO_START_A_MEETING, HOW_TO_JOIN_A_MEETING } from '../constants/videoConstants'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: HOW_TO_START_A_MEETING
    }
  }

  handleChangeVideo(e) {
    const { id:selected } = e.target

    this.setState({selected})
  }

  render() {
    return (
      <div className='app'>
        <header className='App-header'>
          <h1>Hangouts Meet How To</h1>
          <div className='tab-container'>
            <h2
              className={
                this.state.selected === HOW_TO_START_A_MEETING
                ? 'tab selected'
                : 'tab unselected'
              }
              id={HOW_TO_START_A_MEETING}
              onClick={e => this.handleChangeVideo(e)}
            >
              Starting a Meeting in Calendar
            </h2>
            <h2
              className={
                this.state.selected === HOW_TO_JOIN_A_MEETING
                ? 'tab selected'
                : 'tab unselected'
              }
              id={HOW_TO_JOIN_A_MEETING}
              onClick={e => this.handleChangeVideo(e)}
            >
              Joining a meeting in Calendar
            </h2>
          </div>
        </header>
        <VideoContainer />
        </div>
    )
  }
}

export default App;
