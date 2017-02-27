import React, { Component } from 'react';
import { Link } from 'react-router';

export const Header = props => {
	return (
		<nav className="navbar navbar-default">
			<div className="container">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="main-navtab" aria-expanded="false">
						<span className="sr-only">Toggle navigation</span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
					</button>
					<a className="navbar-brand" href="#">Brand</a>
				</div>
				<div className="collapse navbar-collapse" id="main-navtab">
					<ul className="nav navbar-nav">
						<li><Link to={"/home"} activeStyle={{fontWeight: "bold"}}>Home</Link></li>
						<li><Link to={"/user"} activeStyle={{fontWeight: "bold"}}>User</Link></li>
						<li><Link to={"/user/Joe"} activeStyle={{fontWeight: "bold"}}>Greet User</Link></li>
					</ul>
				</div>
			</div>
		</nav>
	);
}