import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Repos from "./Repos";
import Spinner from "../layout/Spinner";

class User extends Component {
  state = {
    searchRepo: "",
  };
  componentDidMount() {
    this.props.userData(this.props.match.params.login);
    this.props.userRepos(this.props.match.params.login);
  }

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      followers,
      following,
      public_repos,
      public_gists,
      htm_url,
      hireable,
      company,
    } = this.props.user;
    const { loading, repos } = this.props;

    return (
      <>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Link to="/" className="btn btn-light">
              Back To Search
            </Link>
            Hireable:{" "}
            {hireable ? (
              <i className="fas fa-check test-success" />
            ) : (
              <i className="fas fa-times-circle test-danger" />
            )}
            <div className="card grid-2">
              <div className="all-center">
                <img
                  src={avatar_url}
                  className="round_img"
                  style={{ width: "150px" }}
                  alt="user_image"
                />
              </div>
              <div className="github_bio">
                {bio && (
                  <>
                    <h3>Bio</h3>
                    <p>{bio}</p>
                  </>
                )}
                <a href={htm_url} className="btn btn-dark my-1">
                  Visit Github Profile
                </a>
                <ul>
                  <li>
                    {login && (
                      <>
                        <strong>Username: </strong>
                        {login}
                      </>
                    )}
                  </li>
                  <li>
                    {location && (
                      <>
                        <strong>Location: </strong>
                        {location}
                      </>
                    )}
                  </li>
                  <li>
                    {company && (
                      <>
                        <strong>Company: </strong>
                        {company}
                      </>
                    )}
                  </li>
                  <li>
                    {blog && (
                      <>
                        <strong>Website: </strong>
                        {blog}
                      </>
                    )}
                  </li>
                </ul>
              </div>
            </div>
            <div className="card text-center">
              <div className="badge badge-primary">Followers: {followers}</div>
              <div className="badge badge-info">Following: {following}</div>
              <div className="badge badge-success">
                Public Reops: {public_repos}
              </div>
              <div className="badge badge-dark">
                Public Gists: {public_gists}
              </div>
            </div>
            <div className="grid-2">
              <div>
                <strong>
                  Some of {name && name.split(" ")[0] + "'s"} repos:{" "}
                </strong>
              </div>
              <div>
              
              </div>
            </div>
            <Repos repos={repos} />
          </>
        )}
      </>
    );
  }
}

export default withRouter(User);
