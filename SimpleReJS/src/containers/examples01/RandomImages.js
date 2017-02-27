import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRandomImages } from '../../redux/actions/index';

class RandomImages extends Component {
  render() {
    const {images: {data, loading}, onRandomImages} = this.props;
    console.info(data);
    return (
        <div>
            <p>
                <button onClick={onRandomImages}>Random Images</button>
                <br/>ImagesStatus: <span style={{color: "blue"}}>{loading}</span>
            </p>
            <ImageList images={data}/>
        </div>
    );
  }
}
function ImageList(props){
    return (
        <div>
            {props.images.map(image => <img key={image.published} 
                src={image.media.m} 
                style={{width:"200px", height:"200px"}} 
                alt={image.title}/>)}
        </div>
    );
}

export default connect(
  (state, ownProps) => ({
      images: state.examples.images
  }),
  {
    onRandomImages: () => getRandomImages
  }
)(RandomImages);