import React, { Component } from "react";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/UserContext";

class App extends Component {
  state = {
    user: {
      name: "James",
      age: 41,
    },
  };
  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        <div className="App">
          <MoviePage />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
