    /* jshint ignore:start */

import React, { Component } from 'react'
import "../css/main.less"


export default class Attention extends Component {

	buyTip(){
    	console.log(1);   
    }

	render() {
		let description = Object.assign({}, this.props.posts.description);
	
		return (
			<div>				
				<div className="item-tips-box b-bottom padding">
					<h4>注意事项</h4>
					<div dangerouslySetInnerHTML={{__html: description.notice}}></div>

				</div>

				<div className="item-travel-box b-bottom padding">
					<h4>
						行程介绍
					</h4>

					<div dangerouslySetInnerHTML={{__html: description.description}}></div>

					<div dangerouslySetInnerHTML={{__html: description.itinerary_summary}}></div>

				</div>


			</div>
	
		)
	}
	
}

