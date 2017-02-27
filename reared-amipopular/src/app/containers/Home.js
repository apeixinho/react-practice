import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { loadImages } from '../redux/actions/index';

class Home extends Component {
	render() {
		const { images: {data, loading}, loadImages } = this.props;
		return(
			<div>
				<section id="showcase">
					<div className="container">
						<h1>Lorem ipsum dolor sit amet</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit reiciendis nostrum qui tempore, aspernatur adipisci repellat ut omnis nemo doloribus dolore molestias, officia tempora ipsa amet fugit, repellendus quas. Tempora.</p>
					</div>
				</section>

				<section id="util-section">
					<div className="container">
						<h1>Lorem ipsum dolor sit amet</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit reiciendis nostrum qui tempore, aspernatur adipisci repellat ut omnis nemo doloribus dolore molestias, officia tempora ipsa amet fugit, repellendus quas. Tempora.</p>
					</div>
				</section>

				<section id="boxes">
					<div className="container">
						<div className="box">
							<img src={require("../img/logo_html5.png")} alt="HTML5 Logo image"/>
							<h3>HTML Markup</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit reiciendis nostrum qui tempore, aspernatur adipisci repellat ut omnis nemo doloribus dolore molestias, officia tempora ipsa amet fugit, repellendus quas. Tempora.</p>
						</div>
						<div className="box">
							<img src={require("../img/logo_css3.png")} alt="CSS3 Logo image"/>
							<h3>CSS3 Styling</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit reiciendis nostrum qui tempore, aspernatur adipisci repellat ut omnis nemo doloribus dolore molestias, officia tempora ipsa amet fugit, repellendus quas. Tempora.</p>
						</div>
						<div className="box">
							<img src={require("../img/logo_design.png")} alt="Design Logo image"/>
							<h3>Graphic Design</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit reiciendis nostrum qui tempore, aspernatur adipisci repellat ut omnis nemo doloribus dolore molestias, officia tempora ipsa amet fugit, repellendus quas. Tempora.</p>
						</div>
						<div className="loader">
							<button type="submit" className="button_1" onClick={loadImages}>{(loading !== 'Load more images' && loading !== 'loaded')?loading:'Load more images'}</button>
						</div>
						<ImageList images={data}/>
					</div>
				</section>
			</div>
		);
	}
}

function ImageList(props){
    return (
    	<div>
	        {props.images.map(
	        	(image, i) => (
	        		i<18?(
		    			<div className="box more-image-box" key={i}>
		        			<img key={image.published+i} src={image.media.m} alt={image.title}/>
		    			</div>
					):''
	        	)
	        )}
    	</div>
    );
}

export default connect(
	(state, ownProps) => ({
		images: state.images
	}),
	{
		loadImages: () => loadImages
	}
)(Home);