import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { clickTab } from '../redux/actions/index';

class Header extends Component {
	render(){
		const {tabs, currentTab, handleCurrentTab, authenticated} = this.props;
		return(
			<header>
				<div className="container">
					<div id="branding">
						<h1><span className="highlight">Amipopular</span> Design</h1>
					</div>
					<TabList tabs={tabs} currentTab={currentTab} handleCurrentTab={handleCurrentTab} authenticated={authenticated}/>
				</div>
			</header>
		);
	}
}

function TabList(props){
	let {tabs, authenticated} = props;
	return (
    	<nav>
			<ul>
				{tabs.map(
					(value, index) => {
						var currentTabClass = '';
						if (props.currentTab === index) {
							currentTabClass = 'current';
						}
						if (authenticated) {
							if (!(index === 3 || index === 4)) {
								return <li key={index} onClick={() => props.handleCurrentTab(index)} className={currentTabClass}><Link to={value.to}>{value.tab}</Link></li>
							}
						} else {
							if (!(index === 1 || index === 5)) {
								return <li key={index} onClick={() => props.handleCurrentTab(index)} className={currentTabClass}><Link to={value.to}>{value.tab}</Link></li>
							}
						}
					}
				)}
			</ul>
		</nav>
    );
}

export default connect(
	(state, ownProps) => ({
		currentTab: state.tabs.currentTab,
		authenticated: state.auth.authenticated
	}),
	{
		handleCurrentTab: clickTab
	}
)(Header);