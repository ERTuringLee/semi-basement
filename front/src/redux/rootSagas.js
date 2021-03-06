import { all } from "redux-saga/effects"

import musicRoot from "./music/sagas"
import chartMusicRoot from "./chart/sagas"
import subMusicRoot from "./submusic1/sagas"
export default function* root() {
  yield all([musicRoot(), chartMusicRoot(), subMusicRoot()])
}
