//OurDb
import React, { Component } from 'react';
import Searchbar from "./Searchbar/presentation";
import OrganismList from "./OrganismList/presentation";
import OrganismDetail from "./OrganismDetail/presentation";

class OurDb extends Component {
	constructor() {
		super();
		this.state = {
			count: 60,
			organismSingle: {
				id: 0,
				isChecked: false,
				gggsss: ""
			},
			searchbarText: "",
			allList: [
				{ "id": 0, "fullName": "Aethina tumdia" },
				{ "id": 1, "fullName": "Bombus terrestis" },
				{ "id": 2, "fullName": "Hyalella azteca" }
			],
			showList: [
				{ "id": 0, "fullName": "Aethina tumdia" },
				{ "id": 1, "fullName": "Bombus terrestis" },
				{ "id": 2, "fullName": "Hyalella azteca" }
			]
		}
	}
	/*
	getList() axios
	*/
	/*
	componentDidMount() {
		this.setState({
			list: [
				{"id": 0, "fullName": "Aethina tumdia"},
				{"id": 1, "fullName": "Bombus terrestis"},
				{"id": 2, "fullName": "Hyalella azteca"}
			]
		});
	}
	*/
	componentDidUpdate(prevProps, prevState) {
		console.log("componentDidUpdate");
		if (prevState.searchbarText !== "" && this.state.searchbarText === "") {
			this.setState({
				showList: this.state.allList
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
	_returnShowList = () => {
		const newList =
			this.state.showList.filter(
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
	/*
	filterEmoji(searchText, maxResults) {
		return emojiList
		  .filter(emoji => {
			if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
			  return true;
			}
			if (emoji.keywords.includes(searchText)) {
			  return true;
			}
			return false;
		  })
		  .slice(0, maxResults);
	  }
	  */
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
				/>
				<OrganismDetail
					data={this.state}
				/>
			</div>
		);
	}
}

export default OurDb;
