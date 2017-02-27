import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { sendFeedback } from '../redux/actions/index';

class Services extends Component {
	constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const name = this.refs.name.value;
        const email = this.refs.email.value;
        const message = this.refs.message.value;
        this.props.sendFeedback(name, email, message);
        this.refs.feedbackForm.reset();
    }

	render() {
		const { feedbacks } = this.props;
		return(
			<div>
				<section id="boxes">
					<div className="container">
						<article id="main-col">
							<h1 className="page-title">Services</h1>
							<ul id="services">
								<li>
									<h3>Website Desing</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
									<p>Pricing: $20 - $25 </p>
								</li>
								<li>
									<h3>Website Maintenance</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
									<p>Pricing: $15 - $20 </p>
								</li>
								<li>
									<h3>Website Hosting</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
									<p>Pricing: $10 - $15 </p>
								</li>
							</ul>
						</article>
						<aside id="sidebar">
							<div className="dark">
								<h3>Feedback</h3>
								<form className="quote" ref="feedbackForm" className="feedback-form" onSubmit={this.handleSubmit}>
									<div>
										<label>Name</label><br/>
										<input type="text" ref="name" placeholder="Enter name..."/>
									</div>
									<div>
										<label>Email</label><br/>
										<input type="email" ref="email" placeholder="Enter email..."/>
									</div>
									<div>
										<label>Message</label><br/>
										<textarea ref="message" placeholder="Enter message..."></textarea>
									</div>
									<button type="submit" className="button_1">Submit</button>
								</form>
							</div>
						</aside>
						<FeedbackList feedbacks={feedbacks}/>
					</div>
				</section>
			</div>
		);
	}
}

function FeedbackList(props){
    return (
    	<div>
	        {props.feedbacks.length?(
				<aside id="sidebar" style={{marginTop: '0px'}}>
					<div className="container">
						<h4>Review your feedback: </h4>
						<ul id="services">
							{props.feedbacks.map(
								(value, i) => (
									<li key={i}>
										<h3>{value.name}</h3>
										<p>{value.email}</p>
										<p>{value.message}</p>
									</li>
								)
							)}
						</ul>
					</div>
				</aside>
			):''}
    	</div>
    );
}

export default connect(
	(state, ownProps) => ({
		feedbacks: state.services.feedbacks
	}),
	{
		sendFeedback: sendFeedback
	}
)(Services);