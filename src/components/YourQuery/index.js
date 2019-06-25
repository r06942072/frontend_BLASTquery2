//YourQuery
import React, { Component } from 'react';
import FastaTextbox from './FastaTextbox/presentation'
import FastaUpload from './FastaUpload/presentation'

class YourQuery extends Component {
	constructor() {
		super();
		this.state = {
			windowWidth: 0,
			windowHeight: 0,
			fastaWidth: 0,
			fastaHeight: 0
		}
	}
	componentDidMount() {
		this.setState(
			{
				windowWidth: window.innerWidth,
				windowHeight: window.innerHeight,
				fastaWidth: window.innerWidth / 20,
				fastaHeight: window.innerHeight / 50
			});
	}
	/*
	componentDidUpdate(prevProps, prevState) {
		if(this.state !== prevState.state) {
			console.log(prevState.state);
		}
	}
	*/
	render() {
		return (
			<div>
				<h1>YourQuery</h1>
				<p>Enter sequence below in FASTA format:</p>
				<FastaTextbox
					data={this.state}
				/>
				<p>Or load it from disk:</p>
				<FastaUpload
				/>
			</div>
		);
	}
}

export default YourQuery;
