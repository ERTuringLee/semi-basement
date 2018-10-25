import React from "react"
import { connect } from "react-redux"

import {
  onLoadedMetadata,
  onLoadStart,
  onPause,
  onPlay,
  onTimeUpdate,
  onVolumeChange,
  playSong,
  // addPlaylist,
  playNexSong,
  playPrevSong
} from "../../redux/player/actions"
//title, artwork, songId, singerName
import Player from "../components/Player"
import { toggleHistory } from "../../redux/meta/actions"

const defaultProps = {
  song: null
}

const PlayerContainer = props => {
  const { song, meta } = props
  return song && !meta.showMyplayer ? <Player {...props} /> : null
  //return <Player {...props} />
}
PlayerContainer.defaultProps = defaultProps

const mapStateToProps = ({ player, meta, music }) => {
  return {
    //song : songUrl
    meta,
    player,
    song: music.song
  }
}
export default connect(
  mapStateToProps,
  {
    onLoadedMetadata,
    onLoadStart,
    onPause,
    onPlay,
    onTimeUpdate,
    onVolumeChange,
    toggleHistory,
    playSong,
    // addPlaylist,
    playNexSong,
    playPrevSong
  }
)(PlayerContainer)
