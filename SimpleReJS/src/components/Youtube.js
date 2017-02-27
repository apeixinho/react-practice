import React, { Component } from 'react'
import Search from '../containers/youtube/Search'
import Video from '../containers/youtube/Video'
import List from '../containers/youtube/List'

export default class Youtube extends Component {
  render() {
    return (
      <div>
        <h1>Reactifying Youtube</h1>
        <Search/>
        <Video/>
        <List/>
      </div>
    )
  }
}