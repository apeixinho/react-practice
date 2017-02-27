import $ from 'jquery';

export const decrease = () => ({type: 'DECREMENT'});

export const getSum = (a, b) => ({type: 'SUM', a, b});

export const getRandomImages = (dispatch, state) => {
    dispatch({type: 'IMAGES_LOADING'});
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $.getJSON(flickerAPI, {
        tags: "mount rainier",
        tagmode: "any",
        format: "json"
    }).done(data => dispatch({ 
        type: 'IMAGES', 
        data:data.items
    })).fail(err => {
        console.log(err);
    });
};