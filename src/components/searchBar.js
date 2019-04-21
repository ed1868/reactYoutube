import React, { Component } from "react";

export default class searchBar extends Component {
  state = {
    term: ""
  };

  onInputChange = (event) => {
    console.log(event.target.value);
    this.setState({term: event.target.value});
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input type="text" value={this.state.term} onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}
