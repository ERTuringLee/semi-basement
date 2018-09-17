import React ,{Component} from 'react'
import classnames from 'classnames/bind'
import css from './ChartTabContainer.scss';
import getImageUrl from '../../../../../utils/ImageUtils'
import IMAGE_SIZES from '../../../../constants/ImageConstants'

const cx         = classnames.bind(css)
const moduleName = 'ChartTabContainer'
class ChartTabItem extends Component{
    render() {
        const min = Math.ceil( (this.props.duration/1000) / 60);
        const sec = (Math.ceil(this.props.duration/1000)) % 60;

        const playCount = (this.props.playCount / 1000000).toFixed(2);
        const likeCount = (this.props.favoriteCount / 1000000).toFixed(2);
        return (
            <tr className={cx(`${moduleName}`)}>
                <td >{this.props.ind +1} </td>
                <td className={cx(`${moduleName}-thumbnail`)}
                    onClick={this.props.selected}>
                    <img src={`${getImageUrl(this.props.artwork, IMAGE_SIZES.SMALL)}`} alt="artwork"/>
                </td>
                <td className={cx(`${moduleName}-title`)} onClick={this.props.selected}>{this.props.title}s</td>
                <td className={cx(`${moduleName}-singer`)}>{this.props.singer}</td>
                <td className={cx(`${moduleName}-time`)}>{min} : {sec}</td>
                <td> <span className={cx(`${moduleName}-likeIcon`)}></span> </td>
                <td>{likeCount}m</td>
                <td> <span className={cx(`${moduleName}-playIcon`)}></span> </td>
                <td>{playCount}m</td>
                <td> <span className={cx(`${moduleName}-addListIcon`)}></span> </td>
            </tr>
        )
    }
}

export default ChartTabItem