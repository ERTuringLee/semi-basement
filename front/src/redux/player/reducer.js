import * as types from "./ActionType"
import { CHANGE_MYPLAYER_CURRENT_TIME, CHANGE_MYPLAYER_VOLUME } from "./actions"
const initialState = {
  currentTime: 0,
  myPlayerCurrentTime: 0,
  myPlayerVolume: 1,
  duration: 0,
  isPlaying: false,
  muted: false,
  repeat: false,
  shuffle: false,
  volume: 1,
  playingIndex: null,
  playlist: null
}
const player = (state = initialState, action) => {
  switch (action.type) {
    case types.ON_PAUSE:
      return {
        ...state,
        isPlaying: false
      }
    case types.ON_LOADED_METADATA:
      return {
        ...state,
        duration: action.duration
      }
    case types.ON_PLAY:
      return {
        ...state,
        isPlaying: true
      }

    case types.ON_TIME_UPDATE:
      return {
        ...state,
        currentTime: action.currentTime
      }

    case types.ON_VOLUME_CHANGE:
      return {
        ...state,
        muted: action.muted,
        volume: action.volume
      }
    case types.TOGGLE_SHUFFLE:
      return {
        ...state,
        shuffle: !state.shuffle
      }
    case types.PLAY_SONG:
      return {
        ...state,
        playingIndex: action.playingIndex,
        playlist: action.playlist
      }
    case CHANGE_MYPLAYER_CURRENT_TIME:
      return {
        ...state,
        myPlayerCurrentTime: action.myPlayerCurrentTime
      }
    case CHANGE_MYPLAYER_VOLUME:
      return {
        ...state,
        myPlayerVolume: action.myPlayerVolume
      }
    default:
      return state
  }
}

export default player
