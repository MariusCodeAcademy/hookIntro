import React, { Component } from "react";
import Login from "./context/Login";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/UserContext";

class App extends Component {
  state = {
    user: {
      name: "James",
      age: 41,
    },
  };

  handleLogin = (username) => {
    console.log("handleLogIn ran", username);
    this.setState({ user: { ...this.state.user, name: username } });
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state.user,
          onLogin: this.handleLogin,
        }}
      >
        <div className="App">
          <MoviePage />
          <Login />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
