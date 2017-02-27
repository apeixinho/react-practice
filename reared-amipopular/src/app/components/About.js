import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

class About extends Component {
	componentWillMount() {
		this.props.fetchMessage();
	}

	render() {
		return(
			<div>
				<section id="boxes">
					<div className="container">
						<article id="main-col">
							<h1 className="page-title">About Us</h1>
							<p>
								<strong>Message: </strong>{this.props.message}
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit reiciendis nostrum qui tempore, aspernatur adipisci repellat ut omnis nemo doloribus dolore molestias, officia tempora ipsa amet fugit, repellendus quas. Tempora.
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit reiciendis nostrum qui tempore, aspernatur adipisci repellat ut omnis nemo doloribus dolore molestias, officia tempora ipsa amet fugit, repellendus quas. Tempora.
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit reiciendis nostrum qui tempore, aspernatur adipisci repellat ut omnis nemo doloribus dolore molestias, officia tempora ipsa amet fugit, repellendus quas. Tempora.
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit reiciendis nostrum qui tempore, aspernatur adipisci repellat ut omnis nemo doloribus dolore molestias, officia tempora ipsa amet fugit, repellendus quas. Tempora.
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit reiciendis nostrum qui tempore, aspernatur adipisci repellat ut omnis nemo doloribus dolore molestias, officia tempora ipsa amet fugit, repellendus quas. Tempora.
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit reiciendis nostrum qui tempore, aspernatur adipisci repellat ut omnis nemo doloribus dolore molestias, officia tempora ipsa amet fugit, repellendus quas. Tempora.
							</p>
						</article>
						<aside id="sidebar">
							<div className="dark">
								<h3>What We Do</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit reiciendis nostrum qui tempore, aspernatur adipisci repellat ut omnis nemo doloribus dolore molestias, officia tempora ipsa amet fugit, repellendus quas. Tempora.
								</p>
							</div>
						</aside>
					</div>
				</section>
			</div>
		);
	}
}

export default connect(
	(state, ownProps) => ({
		message: state.auth.message
	}), 
	actions
)(About);