import React, { Component } from "react";
import MovieRow from "./MovieRow";
import UserContext from "./UserContext";

class MovieList extends Component {
  // pridedam contexta kad butu pasiekiamas visoje klase (2as budas)
  static contextType = UserContext;

  componentDidMount() {
    console.log("MovieList mounted to dom");
    console.log("context in mount", this.context); // { name: "James", age: 41 }
  }
  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => (
          <div>
            <h3>MovieList</h3>
            <p>
              {userContext.user.name} user likes this movie list and he is{" "}
              {userContext.user.age} years old
            </p>
            <MovieRow />
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}
// pridedam contexta kad butu pasiekiamas visoje klase
// MovieList.contextType = UserContext;

export default MovieList;
