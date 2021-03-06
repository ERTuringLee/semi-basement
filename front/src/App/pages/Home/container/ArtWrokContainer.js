import React, { PureComponent } from "react"
import { connect } from "react-redux"
import {
  selectSong,
  historySong,
  loadSongDetail
} from "src/redux/music/actions"
import { changePlayList } from "src/redux/playlist/actions"
import { setMyPlayerSubPlayList } from "src/redux/myPlayer/actions"

import ArtworkPlay from "../components/ArtworkPlay"
import classnames from "classnames/bind"
import css from "./ArtWorkContainer.scss"

import selectIcon from "src/assets/icons/icon2.png"

const cx = classnames.bind(css)
const moduleName = "ArtWorkPlayContainer"

const activePalyList = {
  cursor: "pointer",
  background: `url(${selectIcon}) no-repeat -49px -152px`,
  width: "35px",
  height: "35px"
}

const inactivePalyList = {
  cursor: "pointer",
  background: `url(${selectIcon}) no-repeat -111px -152px`,
  width: "35px",
  height: "35px"
}
class ArtWorkPlayContainer extends PureComponent {
  onClickPlay = ({ songId, title, artworkUrl, duration }) => {
    this.props.selectSong([songId, title, artworkUrl, duration])
    this.props.historySong(songId)
  }
  onClickChangePlayList = playlist => {
    if (
      !this.props.currentMusicListName ||
      this.props.currentMusicListName !== playlist
    ) {
      const songId = this.props.musicInfos.map(info => {
        if (!songId) return info.id
        else return songId.concat(info.id)
      })
      this.props.changePlayList(songId, playlist) // songIds만 배열로 넘겨주고 있는데, 어떻게 하는것이 맞는걸까? 마이 플레이 리스트에서 보여줄때, 상세정보들을 알아야 하기때문에, 일일히 url을 call해서 보여주어야 하나?(해보고 성능상 괜찮다면, redux에 id의 배열만 넣어주는것도 상태를 적게관리 하는 측면에서는 좋은 방법이다.)
      // changePlayList 에는 songId들의 배열을 넘기고, 현재 플레이리스트의 이름을 넘긴다.  // 나중에 고치자... 물린게 너무 많다....
      const myPlayList = JSON.parse(localStorage.getItem("myPlayList")) || []
      this.props.setMyPlayerSubPlayList(myPlayList, "My PlayList")
    }
  }
  renderArtworks = () => {
    return this.props.musicInfos.map(musicInfo => {
      return (
        <ArtworkPlay
          key={musicInfo.id}
          musicInfo={musicInfo}
          onClickPlay={this.onClickPlay}
        />
      )
    })
  }

  render() {
    return this.props.musicInfos ? (
      <div className={cx(`${moduleName}`)}>
        <div className={cx(`${moduleName}-category`)}>
          <div
            style={activePalyList}
            onClick={() => {
              this.onClickChangePlayList(this.props.category)
            }}
            className="patch-icon"
          />
          {/* 여기에 onClick Event 달기 */}
          <div className={cx(`${moduleName}-category-title`)}>
            {this.props.category}
          </div>
        </div>
        <div className={cx(`${moduleName}-songWrapper`)}>
          {this.renderArtworks()}
        </div>
      </div>
    ) : null
  }
}

const mapStateToProps = ({ playList }) => {
  return {
    musicList: playList.musicList,
    currentMusicListName: playList.currentList
  }
}
export default connect(
  mapStateToProps,
  {
    selectSong,
    loadSongDetail,
    historySong,
    changePlayList,
    setMyPlayerSubPlayList
  }
)(ArtWorkPlayContainer)
