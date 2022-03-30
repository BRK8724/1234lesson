import React, { Component } from "react";
import { Cardlist } from "./components/card-list";
import { SearchBox } from "./components/search-box";
import "./App.css";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: []
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ robots: data }));
  }
  render() {
    return (
      <div className="App">
        <h1>Robots search</h1>
        <SearchBox />
        <Cardlist robots={this.state.robots} />
      </div>
    );
  }
}
