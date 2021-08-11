import React, { Component } from "react";
import UserContext from "./UserContext";

class MovieList extends Component {
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
              {userContext.name} user likes this movie list and he is{" "}
              {userContext.age} years old
            </p>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}
// pridedam contexta kad butu pasiekiamas visoje klase
MovieList.contextType = UserContext;

export default MovieList;
