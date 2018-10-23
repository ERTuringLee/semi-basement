import React, { Fragment, PureComponent } from "react"
import { Field, reduxForm } from "redux-form"
import { renderCheckBoxField } from "./renderField"
import classnames from "classnames/bind"
import css from "./RightSideForm.scss"
const cx = classnames.bind(css)
const moduleName = "RightSideForm"
class RightSideForm extends PureComponent {
  render() {
    return (
      <Fragment>
        <div className={cx(`${moduleName}`)}>
          <div className={cx(`${moduleName}_wrapper`)}>
            <div
              onClick={() => {
                this.props.selectThumbnail(1)
                this.props.change("thumbnail", 1)
              }}
            >
              잠만보
            </div>
            <div
              onClick={() => {
                this.props.selectThumbnail(2)
                this.props.change("thumbnail", 2)
              }}
            >
              피카츄
            </div>
            <div
              onClick={() => {
                this.props.selectThumbnail(3)
                this.props.change("thumbnail", 3)
              }}
            >
              꼬부{" "}
            </div>
            <div
              onClick={() => {
                this.props.selectThumbnail(4)
                this.props.change("thumbnail", 4)
              }}
            >
              파이{" "}
            </div>
            <div
              onClick={() => {
                this.props.selectThumbnail(5)
                this.props.change("thumbnail", 5)
              }}
            >
              이상{" "}
            </div>
            <div>6 </div>
          </div>
        </div>
        <div className={cx(`${moduleName}_right_bot_check`)}>
          <Field
            label="I agree use this album cover."
            name="user_terms"
            id="user_terms"
            component={renderCheckBoxField}
            type="checkbox"
            className="checkbox-inline"
          />
        </div>
      </Fragment>
    )
  }
}
export default reduxForm({
  form: "RegisterMusic"
})(RightSideForm)

//export default ThumbNailInput
