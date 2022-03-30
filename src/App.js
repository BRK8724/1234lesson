/** @format */

import React, { Component } from "react";
import { Cardlist } from "./components/card-list";
import { SearchBox } from "./components/search-box";
import "./App.css";
export default class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchField: "",
		};
	}
	onSearchChanged = (event) => {
		this.setState({ searchField: event.target.value });
	};
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((data) => this.setState({ robots: data }));
	}
	render() {
		const { robots, searchField } = this.state;
		const filteredRobots = robots.filter((el) =>
			el.name.toLowerCase().includes(searchField)
		);
		const filteredRobotsEmail = robots.filter((el) =>
			el.email.toLowerCase().includes(searchField)
		);
		const filteredRobotsPhone = robots.filter((el) =>
			el.phone.includes(searchField)
		);
		return (
			<div className="App">
				<h1>Robots search</h1>
				<SearchBox onSearch={this.onSearchChanged} />
				<Cardlist robots={filteredRobotsEmail} />
				<Cardlist robots={filteredRobotsPhone} />
				<Cardlist robots={filteredRobots} />
			</div>
		);
	}
}
