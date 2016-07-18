    /* jshint ignore:start */

import React, { Component } from 'react'
import "../css/main.less"


export default class Head extends Component {

	render() {

		// var name = this.props.posts.description.name.bind(this);
		// console.log(this.props);
		// let name = this.props.posts.description;
		// console.log(name);

		let object = Object.assign({}, this.props.posts.description);
		let posts = this.props.posts;


		return (
			<div>
				<h1 className="title">{object.name}</h1>
				<div className="item-price-box b-bottom">
					$0.60 <span className="price-milestone">起</span>

					<span className="item-id">
						编号：{posts.product_id}
					</span>
				</div>

				<div className="item-intro-box b-bottom padding">
			        <h4>产品概要</h4>
					<ul className="item-total">
						<li>
							<i className="icon iconfont">&#xe633;</i>
							<div className="item-text">
								<p>
									出发地
								</p>
								<div className="num">
									<span>旧金山</span>
								</div>
							</div>
						</li>
						<li>
							<i className="icon iconfont">&#xe619;</i>
							<div className="item-text">
								<p>
									时长
								</p>
								<div className="num">
									{posts.duration}
								</div>
							</div>
						</li>

						<li>
							<i className="icon iconfont">&#xe62d;</i>
							<div className="item-text">
								<p>
									人数
								</p>
								<div className="num">
									{posts.min_num_guest}人起
								</div>
							</div>
						</li>

						<li>
							<i className="icon iconfont">&#xe609;</i>
							<div className="item-text">
								<p>
									参与
								</p>
								<div className="num">
									{posts.ordered}人
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		)
	}
	
}

