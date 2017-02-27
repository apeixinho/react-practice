import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { loadSearch } from '../redux/actions/index';

export default class Search extends Component {
	constructor(props){
		super(props);
		this.state = {
			searchParam: ''
		};
	}

	render() {
		let { state: {searchParam}, props: {data} } = this;
		searchParam = searchParam.trim().toLowerCase();
		if (searchParam.length > 0) {
			data = data.filter(value => value.title.toLowerCase().match(searchParam));
		}
		return(
			<div id="search">
				<div className="container">
					<form ref="searchForm" className="search-form">
						<input type="text" list="dataList" ref="searchParam" value={searchParam} onChange={e => this.setState({searchParam: e.target.value})} placeholder="Search images..."/>
					</form>
					<datalist id="dataList">
						{searchParam?data.map((value, i) => <option key={i}>{value.title}</option>):''}
					</datalist>
				</div>
			</div>
		);
	}
}