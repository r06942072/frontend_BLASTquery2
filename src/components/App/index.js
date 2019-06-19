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
				<OurDb />
				<br />
				<Program />
				<br />
				<ResetSubmit />
			</div>
		);
	}
}

export default App;
