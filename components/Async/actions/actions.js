
// action types

    /* jshint ignore:start */

import request from 'axios';
import * as types from '../constants/ActionTyps';

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'


// action creator: requestPosts
export function requestPosts() {
	return {
		type: REQUEST_POSTS,
	}
}

// action creator: receivePosts
export function receivePosts(json) {
	return {
		type: RECEIVE_POSTS,
		posts: json.data,
		receivedAt: Date.now()
	}
}

function fetchPosts(reddit) {
	return function(dispatch) {
		dispatch(requestPosts())
		return fetch('http://trest.qa.toursforfun.com/product/day-tour/408/1.0')
		// return fetch('http://www.subreddit.com/r/' + reddit + '.json')

			.then(resp => resp.json())
			.then(json => dispatch(receivePosts(json)))
	}
}

function shouldFetchPosts(state, reddit) {
	const posts = state.postsByReddit[reddit]
	if(!posts){
		return true
	}else if(posts.isFetching){
		return false
	}else {
		return posts.didInvalidate
	}
}

// chunk action creator
export function fetchPostsIfNeeded(reddit) {
	return (dispatch, getState) => {
		if(shouldFetchPosts(getState(), reddit)){
			return dispatch(fetchPosts(reddit))
		}else {
			return Promise.resolve()
		}
	}
}



