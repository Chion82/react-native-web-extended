import React, { Component, PropTypes } from 'react'
import View from '../View'
import TabBarItemIOS from './TabBarItemIOS'
import _ from 'lodash'

class ContentWrapper extends Component {

  static propTypes = {
    children: PropTypes.any
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    return <div>{this.props.children}</div>
  }
}

class TabBarIOS extends Component {

  static Item = TabBarItemIOS

  static propTypes = {
    barTintColor: PropTypes.string,
    unselectedTintColor: PropTypes.string,
    tintColor: PropTypes.string,
    style: PropTypes.any,
    children: PropTypes.any
  }

  getTabBarStyle() {
    let defaultStyle = {
      width: '100%',
      height: 50,
      borderTopWidth: 1,
      borderTopColor: '#ddd',
      position: 'fixed',
      bottom: 0,
      backgroundColor: this.props.barTintColor || 'white',
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center'
    }
    let style = _.assign(defaultStyle, this.props.style)
    return style
  }

  getContentView() {
    return React.Children.map(this.props.children, (child, index) => {
      let props = null;
      if (child.props.selected === true) {
        props = { style: { display: 'initial' } }
      } else {
        props = { style: { display: 'none'} }
      }
      return (
        <div {...props} key={index}>
          <ContentWrapper>{child.props.children}</ContentWrapper>
        </div>
      )
    })
  }

  renderTabs() {
    let tabs = []

    React.Children.forEach(this.props.children, (child, index) => {
      let displayIcon = child.props.icon
      let textColor = this.props.unselectedTintColor || '#ccc'
      if (child.props.selected) {
        if (child.props.selectedIcon) {
          displayIcon = child.props.selectedIcon
        }
        textColor = this.props.tintColor || '#039BE5'
      }

      let TabBarItem = child.type

      let tab = (<TabBarItem displayIcon={displayIcon} textColor={textColor} {...child.props} key={index} />)
      tabs.push(tab)
    })
    return tabs
  }

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column'
      }}>
        <View style={{
          alignSelf: 'stretch',
          paddingBottom: 50
        }}>
          {this.getContentView()}
        </View>

        <View style={this.getTabBarStyle()} className="tabbarios-tabbar-container">
          {this.renderTabs()}
        </View>
      </View>
    )
  }

}

export default TabBarIOS
