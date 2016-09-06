import React, { Component, PropTypes } from 'react'
import {Router, Route, hashHistory} from 'react-router'

class RouteContent extends Component {

  static propTypes = {
    route: PropTypes.any,
    params: PropTypes.any,
    location: PropTypes.any,
    renderScene: PropTypes.func
  };

  render() {
    const {renderScene, navigator} = this.props.route
    let route = null

    if (this.props.params.routeIndex) {
      route = {
        index: parseInt(this.props.params.routeIndex)
      }
    }

    if (this.props.location && this.props.location.state) {
      route = this.props.location.state.route
    }

    return renderScene(route, navigator)
  }
}

class Navigator extends Component {

  static propTypes = {
    initialRoute: PropTypes.object,
    renderScene: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.navigator = []

    this.navigator.push = (newRoute) => {
      hashHistory.push({
        pathname: '/app/' + newRoute.index,
        state: {
          route: newRoute
        }
      })
      this.navigator[this.navigator.length] = newRoute
      return this.navigator.length
    }

    this.navigator.pop = () => {
      hashHistory.goBack()
      var returnRoute = this.navigator[this.navigator.length - 1]
      this.navigator.splice(this.navigator.length - 1, 1)
      return returnRoute
    }

    if (/\/app\/([0-9]+)/.test(window.location.hash)) {
      return
    }

    if (props.initialRoute) {
      this.navigator.push(props.initialRoute)
    }
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route component={RouteContent} navigator={this.navigator} path="/app/:routeIndex" renderScene={this.props.renderScene} />
      </Router>
    )
  }
}

export default Navigator
