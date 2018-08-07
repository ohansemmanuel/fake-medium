import React, { Component } from "react";
import Article from "../components/Article";
import Clap from "../components/Clap";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <aside>
          <Clap />
        </aside>
        <main>
          <Article />
        </main>
      </div>
    );
  }
}

export default App;
