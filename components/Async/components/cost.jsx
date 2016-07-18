    /* jshint ignore:start */

import React, { Component } from 'react'
import {Modal,Button} from 'react-bootstrap';

import "../css/main.less"


export default class Cost extends Component {

	constructor(props){
		super()

        this.state = {showModal: false};
		this.close = this.close.bind(this)
		this.open = this.open.bind(this)

    }

	close() {
		this.setState({ showModal: false });
	}

	open() {
		this.setState({ showModal: true });
	}

	render() {
		let packageCost = Object.assign({}, this.props.posts.package);

		return (
			<div className="item-cost-box b-bottom padding">
				<h4>
					费用说明
				</h4>

				<h5>费用包含</h5>
				<ul dangerouslySetInnerHTML={{__html: packageCost.package_include}}></ul>


				<h5>费用不包含</h5>
				<ul dangerouslySetInnerHTML={{__html: packageCost.package_exclude}}></ul>
				
				<div className="tac">
					<a className="btn btn-blue" onClick={this.open}>购买须知</a>
				</div>
				<Modal show={this.state.showModal} onHide={this.close}>
		          <Modal.Header closeButton>
		            <Modal.Title>订购须知</Modal.Title>
		          </Modal.Header>
		          <Modal.Body>
		          	<div className="block">
			            <h4>特别提醒</h4>
			            <ul>
			                <li>
			                    豪华空调大巴或中巴接送, 免费的接送服务(请参考接送时间和地点)
			                </li>
			                <li>
			                    两晚酒店住宿, 所有酒店提供双人床, 标准间
			                </li>
			                <li>
			                    精心安排旅馆酒店及大型巴士，让您的旅程舒适又安全
			                </li>
			            </ul>
			        </div>

			        <div className="block">
			            <h4>预订程序及电子票</h4>
			            <ul>
			                <li>
			                    您往返出发地和机场以及预定的接送地点的机票和相关交通费用
			                </li>
			                <li>
			                    旅游保险
			                </li>
			                <li>
			                    提供给导游和司机的小费：共$6.00/人/天(接机当日包含在内)
			                </li>
			                <li>
			                    所有个人费用和饮食，行程中的门票或自费项目(自费项目和价格可能会因为季节变化而有所调整，最终请以出团当天的实际项目和售票窗口的实际价格为准。)
			                </li>
			            </ul>
			        </div>

			        <div className="block">
			            <h4>特别提醒</h4>
			            <ul>
			                <li>
			                    订购必须经过一定的购买流程。我们会在1－2个工作日内通过电子邮件与您进行确认
			                </li>
			                <li>
			                    请您尽快预订，因为价格可能在不同时间会有所不同。例如，在公众假期价格会有涨幅
			                </li>
			                <li>
			                    提供给导游和司机的小费：共$6.00/人/天(接机当日包含在内)
			                </li>
			                <li>
			                    为了确保您的安全及旅途愉快，当地旅行团供应商会保留对行程安排进行更改的权利
			                </li>
			            </ul>
			        </div>

		          </Modal.Body>
		          <Modal.Footer>
		            <Button onClick={this.close}>关闭</Button>
		          </Modal.Footer>
		        </Modal>
			</div>
		)
	}
	
}


