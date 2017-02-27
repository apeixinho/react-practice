import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { subscribeNewsletter } from '../redux/actions/index';

class Newsletter extends Component {
	constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const email = this.refs.email.value;
        this.props.subscribeNewsletter(email);
        this.refs.newsLetterForm.reset();
    }

	render() {
		const { emails } = this.props;
		return(
			<div>
				<section id="newsletter">
					<div className="container">
						<h3>Subscribe to our Newsletter</h3>
						<form ref="newsLetterForm" className="newsLetter-form" onSubmit={this.handleSubmit}>
							<input type="email" ref="email" placeholder="Enter email..."/>
							<button type="submit" className="button_1">Submit</button>
						</form>
					</div>
				</section>
				<EmailList emails={emails}/>
			</div>
		);
	}
}

function EmailList(props){
    return (
    	<div>
	        {props.emails.length?(
				<section id="newsletter" style={{marginTop: '0px', textAlign: 'center'}}>
					<div className="container">
						<h4>Already subscribed by: </h4>
						<ul>
							{props.emails.map(
								(email, i) => <li key={i}>{email}</li>
							)}
						</ul>
					</div>
				</section>
			):''}
    	</div>
    );
}

export default connect(
	(state, ownProps) => ({
		emails: state.newsletter.emails
	}),
	{
		subscribeNewsletter: subscribeNewsletter
	}
)(Newsletter);