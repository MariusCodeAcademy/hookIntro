import React, { Component } from "react";
import UserContext from "./UserContext";

class MovieList extends Component {
  state = {};
  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => (
          <div>
            <h3>MovieList</h3>
            <p>{userContext.name} user likes this movie list and he is {userContext.age} years old</p>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default MovieList;
