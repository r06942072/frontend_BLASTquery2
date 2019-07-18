import React, { Component } from 'react';
import { PropTypes } from "prop-types";

import { connect } from 'react-redux';
import {
	fetchList,
	setList,
	getList,
	setSearchbar
} from '../../actions/formAction';

import FastaTextbox from '../YourQuery/FastaTextbox/presentation';
import FastaUpload from '../YourQuery/FastaUpload/presentation';
import Searchbar from "../OurDb/Searchbar/presentation";
import OrganismList from "../OurDb/OrganismList/presentation";
import OrganismDetail from "../OurDb/OrganismDetail/presentation";
import ChooseProgram from "../Program/ChooseProgram/presentation";
import OptionBlastn from "../Program/ChooseProgram/presentation"
import OptionTblastn from "../Program/ChooseProgram/presentation"
import OptionTblastx from "../Program/ChooseProgram/presentation"
import OptionBlastp from "../Program/ChooseProgram/presentation"
import OptionBlastx from "../Program/ChooseProgram/presentation"

//import Program from '../Program';
//import ResetSubmit from '../ResetSubmit';
//import axios from "axios";

class App extends Component {
	/*
	componentWillMount() {	
	}
	*/
	componentDidMount() {
		console.log('componentDidMount');
		this.props.fetchList();
	}
	componentDidUpdate(prevProps, prevState) {
		console.log('componentDidUpdate');
	}
	//YourQuery section

	//OurDb section
	_handleSearchbarChange = (event) => {
		this.props.setSearchbar(event.target.value);
	}
	_handleCheckboxAll = (event) => {
		let newList = this.props.allList;
		newList.forEach((res) => {
			res.isChecked = event.target.checked
		});
		this.props.setList(newList);
	}
	_handleCheckboxChange = (event) => {
		//console.log(event.target.checked);
		let newList = this.props.allList;
		newList.forEach((res) => {
			if (res.fullName === event.target.name) {
				res.isChecked = !res.isChecked;
			}
		});
		this.props.setList(newList);
	}
	_isRenderAll = () => {
		const searchbarText = this.props.searchbarText;
		return (searchbarText === '') ? true : false;
	}
	_renderShowList = () => {
		//depend on searchbarText
		const allList = this.props.allList;
		const searchbarText = this.props.searchbarText;
		if (searchbarText === '') {
			return allList;
		}
		else {
			const newList =
				allList.filter(
					(res) => {
						if (res.fullName.toLowerCase().includes(
							searchbarText.toLowerCase())) {
							return true;
						}
						else {
							return false;
						}
					}
				);
			const notFound = { "id": 404, "fullName": "Not found!!!" }
			return (newList.length !== 0) ? newList : [notFound];
		}
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
		console.log(this.props);
		return (
			<div>
				<h1>YourQuery</h1>
				<FastaTextbox />
				<FastaUpload />
				<br />
				<p>----------------------------------------</p>
				<h1>OurDb</h1>
				<Searchbar
					handleSearchbarChange={this._handleSearchbarChange}
				/>
				<OrganismList
					isRenderAll={this._isRenderAll()}
					showList={this._renderShowList()}
					handleCheckboxAll={this._handleCheckboxAll}
					handleCheckboxChange={this._handleCheckboxChange}
				/>
				<OrganismDetail />
				<br />
				<p>----------------------------------------</p>
				<h1>Program</h1>
				<p>----------------------------------------</p>
				<h1>ResetSubmit</h1>
			</div>
		);
	}
}
/*
App.propTypes = {
	allList: PropTypes.array.isRequired
}
*/
const mapStateToProps = (state) => ({
	searchbarText: state.formState.searchbarText,
	allList: state.formState.allList
});

//bundle actionCreators together
const mapDispatchToProps = {
	fetchList,
	setList,
	getList,
	setSearchbar
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

/*
We connect this react component App to redux store
We get both data and function by ```connect(data, function)```
It has this.props
*/