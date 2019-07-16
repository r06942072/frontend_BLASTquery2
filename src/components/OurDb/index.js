//OurDb
import React, { Component } from 'react';
import Searchbar from "./Searchbar/presentation";
import OrganismList from "./OrganismList/presentation";
import OrganismDetail from "./OrganismDetail/presentation";
import { tsMethodSignature } from '@babel/types';

class OurDb extends Component {
	constructor(props) {
		super(props); //this.props is now meaningful
		this.state = {
			count: 60,
			organismSingle: {
				id: 0,
				isChecked: false,
				gggsss: ""
			},
			searchbarText: "",
			showList: []
		}
	}
	componentDidMount() {
		this.setState({
			showList: this.props.allList
		});
	}
	componentDidUpdate(prevProps, prevState) {
		//console.log("componentDidUpdate");
		if (prevState.searchbarText !== "" && this.state.searchbarText === "") {
			this.setState({
				showList: this.props.allList
			});
		}
		else if (prevState.searchbarText !== this.state.searchbarText) {
			this.setState({
				showList: this._returnShowList()
			});
		}
	}
	_handleSearchChange = (event) => {
		this.setState({
			searchbarText: event.target.value
		});
	}
	_handleCheckboxAll = (event) => {
		let newList = this.state.showList;
		//loop through each element in the newList
		newList.forEach((data) => {
			data.isChecked = event.target.checked;
		});
		//update showList
		this.setState({ showList: newList });
	}	
	_handleCheckboxChange = (event) => {
		let newList = this.state.showList;
		//loop through each element in the newList
		newList.forEach((data) => {
			if (data.fullName === event.target.name) {
				data.isChecked = event.target.checked;
			}
		});
		//update showList
		this.setState({ showList: newList });
	}
	_returnShowList = () => {
		//capture showList from props.allList
		const newList =
			this.props.allList.filter(
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

	render() {
		return (
			<div>
				<h1>OurDb</h1>
				<h2>BLAST Databases</h2>
				<Searchbar
					handleSearchChange={this._handleSearchChange}
				/>
				<OrganismList
					showList={this.state.showList}
					handleCheckboxAll={this._handleCheckboxAll}
					handleCheckboxChange={this._handleCheckboxChange}
				/>
				<OrganismDetail
					data={this.state}
				/>
			</div>
		);
	}
}

export default OurDb;
