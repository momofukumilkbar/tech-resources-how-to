import React, { Component } from 'react'
import './App.css'
import VideoContainer from './VideoContainer/VideoContainer.js'
import {
  HOW_TO_CREATE_A_RESOURCE,
} from '../constants/videoConstants'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: HOW_TO_CREATE_A_RESOURCE
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
          <h1>Tech Resources How To</h1>

        </header>
        <VideoContainer video={this.state.selected}/>
        </div>
    )
  }
}

export default App;
