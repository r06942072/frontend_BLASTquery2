//YourQuery
import React, { Component } from 'react';
import FastaTextbox from './FastaTextbox/presentation'
import FastaUpload from './FastaUpload/presentation'

class YourQuery extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div>
				<h1>YourQuery</h1>
				<p>Enter sequence below in FASTA format:</p>
				<FastaTextbox 
				/>
				<p>Or load it from disk:</p>
				<FastaUpload 
				/>
			</div>
		);
	}
}

export default YourQuery;
