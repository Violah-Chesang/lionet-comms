import React, { Component } from 'react'
import Nav from './nav/Nav'
import Main from './main/Main'

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
       <Nav />
       <Main />
      </div>
    )
  }
}
