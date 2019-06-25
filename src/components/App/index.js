import React, { Component } from 'react';
import YourQuery from '../YourQuery';
import OurDb from '../OurDb';
import Program from '../Program';
import ResetSubmit from '../ResetSubmit';

class App extends Component {
	render() {
		return (
			<div>
				<YourQuery />
				<br />
				<p>----------------------------------------</p>
				<OurDb />
				<br />
				<p>----------------------------------------</p>
				<Program />
				<br />
				<p>----------------------------------------</p>
				<ResetSubmit />
				<br />
				<p>----------------------------------------</p>
			</div>
		);
	}
}

export default App;
