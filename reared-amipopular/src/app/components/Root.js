import React, { Component } from 'react';
import $ from 'jquery';

import Header from '../containers/Header';
import Newsletter from '../containers/Newsletter';
import Footer from './Footer';
import Search from './Search';

export default class Root extends Component {
	constructor(props){
		super(props);
		this.state = {
			tabs: [
				{tab: 'Home', to: '/'}, 
				{tab: 'About', to: '/about-us'}, 
				{tab: 'Services', to: '/services'}, 
				{tab: 'Sign In', to: '/signin'}, 
				{tab: 'Sign Up', to: '/signup'}, 
				{tab: 'Sign Out', to: '/signout'}
			],
			dummyData: []
		};
	}

	componentWillMount() {
		var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
	    $.getJSON(flickerAPI, {
	        tags: "mount rainier",
	        tagmode: "any",
	        format: "json"
	    }).done(data => this.setState({
	    	dummyData: data.items
	    })).fail(err => {
	        console.log(err);
	    });
	}

	render() {
		const {tabs, dummyData} = this.state;
		return (
			<div>
				<Header tabs={tabs}/>
				<Search data={dummyData}/>
				{React.cloneElement(this.props.children, {...this.props, tabs})}
				<Newsletter/>
				<Footer/>
			</div>
		);
	}
}
