import React, { Component } from "react";
import UserContext from "./UserContext";

class MovieList extends Component {
  state = {};
  render() {
    return (
      <UserContext.Consumer>
        {() => (
          <div>
            <h3>MovieList</h3>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default MovieList;
