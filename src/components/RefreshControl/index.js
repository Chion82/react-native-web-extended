import React, { Component } from 'react'
import ReactPullToRefresh from '../../modules/react-pull-to-refresh/src'
import ActivityIndicator from '../ActivityIndicator'
import _ from 'lodash'

const arrowIcon = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfgCQYHLCTylhV1AAAAjklEQVQ4y2P8z0AaYCJRPX4NsyNWM5Ok4R/n+/noWhjx+2F20n8HwcTQv0T7IXUe4wFUWwh6Gl0LEaGEqoWoYEXWQmQ8ILQwEh/TkBBjme3HIESkjn+Mv9/vJjlpkOwkom2AxTmRGhBJhCgNyCmKCA2oCZCgBvT0ykSacgIaZiaiKydoA7pykiKOSE+jAwADZUnJjMWwUQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNi0wOS0wNlQwNzo0NDozNiswMjowMAZN3oQAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTYtMDktMDZUMDc6NDQ6MzYrMDI6MDB3EGY4AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==`
const css = `.ptr-element .pull-down-icon {
  font-size: 34px;
  transition: all .25s ease;
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  margin-top: -22px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 22px;
  height: 22px;
}
.ptr-refresh .pull-down-icon {
  -webkit-transform: rotate(270deg);
  transform: rotate(270deg);
}
.ptr-loading .pull-down-icon {
  display: none;
}
.ptr-reset .pull-down-icon {
  display: block;
}

.ptr-element .loading {
  display: inline-block;
  display: none;
  margin-top: 5px;
}
.ptr-loading .loading {
  display: block;
  margin-bottom: 10px;
}`;

(function () {
  const styleTag = document.createElement('style')
  styleTag.innerHTML = css
  document.getElementsByTagName('head')[0].appendChild(styleTag)
}())

class RefreshControl extends Component {

  static propTypes = {
    onRefresh: React.PropTypes.func.isRequired,
    refreshing: React.PropTypes.bool.isRequired,
    children: React.PropTypes.any,
    style: React.PropTypes.any
  }

  handleRefresh(resolve) {
    this.props.onRefresh()
    setInterval(() => {
      if (!this.props.refreshing) {
        resolve()
      }
    }, 1)
  }

  render() {
    return (
      <ReactPullToRefresh
        icon={<img width={22} height={22} src={arrowIcon} className="pull-down-icon" />}
        loading={<div className="loading"><ActivityIndicator animating={true} /></div>}
        onRefresh={this.handleRefresh.bind(this)} >
        {this.props.children}
      </ReactPullToRefresh>
    )
  }
}

export default RefreshControl
