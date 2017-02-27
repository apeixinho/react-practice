import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/actionIndex';
import Main from '../components/Main';

export default connect(
	state => ({
        posts: state.posts,
        comments: state.comments
    }),
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Main);