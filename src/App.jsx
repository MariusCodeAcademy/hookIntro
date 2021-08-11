import React, { Component } from "react";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/UserContext";

class App extends Component {
  state = {
    username: "James",
  };
  render() {
    return (
      <UserContext.Provider value={this.state.username}>
        <div className="App">
          <MoviePage />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
