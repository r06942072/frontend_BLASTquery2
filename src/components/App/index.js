import React, { Component } from 'react';

import FastaTextbox from '../YourQuery/FastaTextbox/presentation';
import FastaUpload from '../YourQuery/FastaUpload/presentation';
import Searchbar from "../OurDb/Searchbar/presentation";
import OrganismList from "../OurDb/OrganismList/presentation";
import OrganismDetail from "../OurDb/OrganismDetail/presentation";
//import Program from '../Program';
//import ResetSubmit from '../ResetSubmit';
//import axios from "axios";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			allList: this._getAllList(),
			searchbarText: "",
			whichProgram: 1
		}
	}
	componentDidMount() {
		/*
		this.setState({
			allList: this._getAllList()
		});
		*/
	}
	_getAllList = () => {
		const allList = [
			{ "id": 1, "fullName": "Aethina tumdia", "isChecked": false },
			{ "id": 2, "fullName": "Bombus terrestis", "isChecked": false },
			{ "id": 3, "fullName": "Hyalella azteca", "isChecked": false }
		];
		return allList;
	}
	//YourQuery section

	//OurDb section
	_handleSearchbarChange = (event) => {
		this.setState({
			searchbarText: event.target.value
		});
	}
	_handleCheckboxAll = (event) => {
		let newList = this.state.allList;
		newList.forEach((data) => {
			data.isChecked = event.target.checked;
		});
		this.setState({
			allList: newList
		});
	}
	_handleCheckboxChange = (event) => {
		let newList = this.state.allList;
		newList.forEach((data) => {
			if (data.fullName === event.target.name) {
				data.isChecked = event.target.checked;
			}
		});
		this.setState({
			allList: newList
		});
	}
	_renderShowList = () => {
		const newList =
			this.state.allList.filter(
				(data) => {
					if (data.fullName.toLowerCase().includes(
						this.state.searchbarText.toLowerCase())) {
						return true;
					}
					else {
						return false;
					}
				}
			);
		const notFound = { "id": 404, "fullName": "Not found" }
		return (newList.length !== 0) ? newList : [notFound];
	}
	//Program section
	_renderProgram = (res) => {
		let Program;
		switch (res) {
			case 1:
				Program = <FastaTextbox />;
				break;
			case 2:
				Program = <FastaUpload />;
				break;
			case 3:
				break;
			case 4:
				break;
			case 5:
				break;
			default:
				Program = <FastaTextbox />;
		}
		return Program;
	}
	render() {
		let Program = this._renderProgram(this.state.whichProgram);
		return (
			<div>
				<h1>YourQuery</h1>
				<FastaTextbox />
				<FastaUpload />
				<br />
				<p>----------------------------------------</p>
				<h1>OurDb</h1>
				<Searchbar
					onChange={this._handleSearchbarChange}
				/>
				<OrganismList
					showList={this._renderShowList()}
					handleCheckboxAll={this._handleCheckboxAll}
					handleCheckboxChange={this._handleCheckboxChange}
				/>
				<OrganismDetail />
				<br />
				<p>----------------------------------------</p>
				<h1>Program</h1>
				{Program}
				<p>----------------------------------------</p>
				<h1>ResetSubmit</h1>
			</div>
		);
	}
}

export default App;
