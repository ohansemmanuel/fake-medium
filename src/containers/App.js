import React, { Component } from "react";
import styled from "styled-components";
import Article from "../components/Article";
import Clap from "../components/Clap";

const StyledApp = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;

  aside {
    min-width: 35vh;
    display: flex;
    justify-content: flex-end;
  }
  main {
    flex: 1 0 350px;
    ${"" /* not responsive */} padding: 0 5rem;
  }
`;

class App extends Component {
  state = {};
  render() {
    return (
      <StyledApp>
        <aside>
          <Clap />
        </aside>
        <main>
          <Article />
        </main>
      </StyledApp>
    );
  }
}

export default App;
