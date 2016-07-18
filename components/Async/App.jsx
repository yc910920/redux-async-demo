    /* jshint ignore:start */

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { selectReddit, invalidateReddit, fetchPostsIfNeeded } from './actions/actions.js'
import Head from './components/Header.jsx'
import Cost from './components/Cost.jsx'
import Slider from './components/Slider.jsx'

import Attention from './components/Attention.jsx'


class App extends Component {

	constructor() {
		super()
		this.handleChange = this.handleChange.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}

	componentDidMount() {
		console.log(this.props)
		const { dispatch, selectedReddit } = this.props
		dispatch(fetchPostsIfNeeded(selectedReddit))
	}

	componentWillReceiveProps(nextProps) {
		console.log('执行componentWillReceiveProps',nextProps);
		if(nextProps.selectedReddit != this.props.selectedReddit){	
			const { dispatch, selectedReddit } = nextProps	

			dispatch(fetchPostsIfNeeded(selectedReddit))
		}
	}

	handleChange(reddit) {
		const { dispatch } = this.props
		dispatch(selectReddit(reddit))	
	}

	handleClick() {
		const { dispatch, selectedReddit } = this.props
		dispatch(invalidateReddit(selectedReddit))
		dispatch(fetchPostsIfNeeded(selectedReddit))
	}

	render() {

		   var slides = [{
			    background: "imgs/1.jpg",
			  }, {
			    background: "./imgs/2.jpg",
			  }, {
			    background: "./imgs/3.jpg",
			  }];

		// console.log(this.props)
		const { selectedReddit, posts, lastUpdated, isFetching } = this.props
		return (
			<div>
				{isFetching && !posts && 
					<h2>Loading...</h2>
				}	
				{!isFetching && !posts &&
					<h2>Empth</h2>
				}
				{posts &&
					<div>
						<Slider slides= {slides} time="2000"/ >
						<Head posts={posts} />
						<Cost posts={posts} />
						<Attention posts={posts} />
					</div>
				}

				
			</div>
		)
	}
}

function mapStateToProps(state) {
	const { selectedReddit, postsByReddit } = state
	const {
		isFetching,
		lastUpdated,
		items: posts
	} = postsByReddit[selectedReddit] || {
		isFetching: true,
		items: {}
	}
	return {
		selectedReddit,
		isFetching,
		lastUpdated,
		posts
	}
}

export default connect(mapStateToProps)(App)