import React, { Component, PropTypes } from 'react';
import { View } from 'react-native-web';
import TabBarItemIOS from './TabBarItemIOS';

class ContentWrapper extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

class TabBarIOS extends Component {
  static Item = TabBarItemIOS

  static propTypes = {
    barTintColor: PropTypes.string,
    children: PropTypes.any,
    style: PropTypes.any,
    tintColor: PropTypes.string,
    unselectedTintColor: PropTypes.string
  }

  getTabBarStyle() {
    const defaultStyle = {
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
    };
    const style = Object.assign(defaultStyle, this.props.style);
    return style;
  }

  getContentView() {
    return React.Children.map(this.props.children, (child, index) => {
      let props = null;
      if (child.props.selected === true) {
        props = { style: { display: 'initial' } };
      } else {
        props = { style: { display: 'none' } };
      }
      return (
        <div {...props} key={index}>
          <ContentWrapper>{child.props.children}</ContentWrapper>
        </div>
      );
    });
  }

  renderTabs() {
    const tabs = [];

    React.Children.forEach(this.props.children, (child, index) => {
      let displayIcon = child.props.icon;
      let textColor = this.props.unselectedTintColor || '#ccc';
      if (child.props.selected) {
        if (child.props.selectedIcon) {
          displayIcon = child.props.selectedIcon;
        }
        textColor = this.props.tintColor || '#039BE5';
      }

      const TabBarItem = child.type;

      const tab = (<TabBarItem displayIcon={displayIcon} textColor={textColor} {...child.props} key={index} />);
      tabs.push(tab);
    });
    return tabs;
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

        <View className='tabbarios-tabbar-container' style={this.getTabBarStyle()} >
          {this.renderTabs()}
        </View>
      </View>
    );
  }
}

export default TabBarIOS;
