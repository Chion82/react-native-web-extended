import React, { Component, PropTypes } from 'react'
import View from '../View'
import Image from '../Image'
import Text from '../Text'
import TouchableOpacity from '../Touchable/TouchableOpacity'
import _ from 'lodash'

class TabBarItemIOS extends Component {

  static propTypes = {
    title: PropTypes.string,
    icon: PropTypes.any,
    selectedIcon: PropTypes.any,
    selected: PropTypes.bool,
    iconComponent: PropTypes.node,
    badge: PropTypes.any,
    textColor: PropTypes.any,
    displayIcon: PropTypes.any,
    style: PropTypes.any
  }

  getBadgeStyle() {
    return {
      position: 'absolute',
      top: -2,
      right: -6,
      backgroundColor: 'red',
      borderRadius: 9,
      color: 'white',
      fontSize: 12,
      width: 18,
      height: 18,
      textAlign: 'center',
      lineHeight: 20
    }
  }

  getImageStyle() {
    let defaultStyle = {
      width: 26,
      height: 26
    }
    return _.assign(defaultStyle, this.props.style)
  }

  getWrapperProps() {
    let props = _.clone(this.props)
    if (props.style) {
      delete props.style
    }
    return props
  }

  render() {
    return (
      <TouchableOpacity style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }} {...this.getWrapperProps()}>

        <View style={{
          position: 'relative',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {this.props.displayIcon && (<Image resizeMode="stretch" source={this.props.displayIcon} style={this.getImageStyle()} />)}

          {this.props.iconComponent}

          {this.props.badge && (
            <Text style={this.getBadgeStyle()}>{this.props.badge}</Text>
          )}
        </View>

        <View style={{
          marginTop: 3
        }}>

          <Text style={{
            color: this.props.textColor,
            fontSize: 11,
            textAlign: 'center'
          }}>{this.props.title}</Text>

        </View>

      </TouchableOpacity>
    )
  }

}

export default TabBarItemIOS
