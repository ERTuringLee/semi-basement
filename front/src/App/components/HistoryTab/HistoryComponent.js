import React, { Component } from 'react'
import classnames from 'classnames/bind'
import css from './HistoryComponent.scss'
import IMAGE_SIZES from '../../constants/ImageConstants'
import getImageUrl from '../../../utils/ImageUtils'
import { selectSong } from '../../../redux/music/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
const cx = classnames.bind(css)
const moduleName = 'HistoryComponent'
class HistoryComponent extends Component {
  state = {
    toggle: false
  }
  _fetchSong = () => {
    const songInfo = {
      songId: this.props.songId,
      title: this.props.title,
      artworkUrl: this.props.artwork,
      duration: this.props.duration / 1000
    }
    this.props.selectSong(songInfo)
  }

  render() {
    return (
      <div className={cx(`${moduleName}`)} style={{ display: 'flex' }}>
        <div
          className={cx(`${moduleName}__artwork`)}
          onClick={this._fetchSong}
          style={{
            backgroundImage: `url(${getImageUrl(
              this.props.artwork,
              IMAGE_SIZES.XLARGE
            )})`
          }}
        >
          <div />
        </div>
        <div>
          <div className={cx(`${moduleName}__title`)}>{this.props.title}</div>
          <div className={cx(`${moduleName}__singer`)}>{this.props.singer}</div>
        </div>
      </div>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectSong }, dispatch)
}
function mapStateToProps(state) {
  return { toggleHistory: state.meta.toggleHistory }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryComponent)
