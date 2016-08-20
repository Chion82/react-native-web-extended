import { Router, Route, Link, hashHistory, Redirect } from 'react-router';
import React, { Component } from 'react';

class RouteContent extends Component {
	render() {
		const { renderScene, navigator } = this.props.route;
		const { route } = this.props.location.state;

		return renderScene.call(null, route, navigator);
	}
}

class Navigator extends Component {

	constructor(props) {
		super(props);
		this.navigator=[];

		this.navigator.push = (newRoute) => {
			hashHistory.push({
				pathname : '/app/',
				state : { route : newRoute}
			});
			this.navigator[this.navigator.length] = newRoute;
			return this.navigator.length;
		}

		this.navigator.pop = () => {
			hashHistory.goBack();
			var returnRoute = this.navigator[this.navigator.length - 1];
			this.navigator.splice(this.navigator.length - 1, 1);
			return returnRoute;
		}

		if (props.initialRoute) {
			this.navigator.push(props.initialRoute);
		}
	}

	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/app" component={RouteContent} renderScene={this.props.renderScene} navigator={this.navigator}/>
			</Router>
		)
	}
}

export default Navigator;
