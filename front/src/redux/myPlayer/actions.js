const MODULE_NAME = `MYPLAYER`

export const ADD_PLAYLIST = `${MODULE_NAME}/ADD_PLAYLIST`

export function addPlaylist() {
  return {
    type: ADD_PLAYLIST
  }
}