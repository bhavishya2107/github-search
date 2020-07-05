import React, { Component } from "react";

class Search extends Component {
  state = {
    text: "",
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert(" Please Enter Username", "light");
    } 
    else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form text-center">
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
            onChange={this.onChange}
            onFocus={this.props.onFocus}
          />
          <input type="submit" value="Search" className="btn btn-lg btn-dark" />
        </form>
      </div>
    );
  }
}

export default Search;
