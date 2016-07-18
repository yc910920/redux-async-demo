    /* jshint ignore:start */

import { combineReducers } from 'redux'

import { REQUEST_POSTS, RECEIVE_POSTS } from './../actions/actions.js'


// inner function
function posts(state = {
	isFetching: false,
	items: {}
}, action) {
	console.log(action)
	switch(action.type) {
		case REQUEST_POSTS: 
			return Object.assign({}, state, {
				isFetching: true,
			})
		case RECEIVE_POSTS:
			return Object.assign({}, state, {
				isFetching: false,
				items: action.posts,
				lastUpdated: action.receivedAt
			})
		default:
			return state
	}
}

// reducer: postsByReddit
function postsByReddit(state = {}, action) {
	switch(action.type) {
		case REQUEST_POSTS:
		case RECEIVE_POSTS:
			return Object.assign({}, state, {
				[action.reddit]: posts(state[action.reddit], action)
			})
		default: 
			return state
	}
}

const rootReducer = combineReducers({
	postsByReddit
})

export default rootReducer

