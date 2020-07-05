import React from "react";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import Search from "./components/Search";
import Alert from "./components/Alert";
import About from "./components/About";
import User from "./components/User";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data, loading: false });
  }

  searchUsers = async (user) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${user}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
  };

  onFocus = () => {
    this.setState({
      alert: null,
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route exact path="/">
                <>
                  <Search
                    searchUsers={this.searchUsers}
                    setAlert={this.setAlert}
                    onFocus={this.onFocus}
                  />
                  <Users data={this.state} />
                </>
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/user/:login">
                <User />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
