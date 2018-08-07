import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Article from "../components/Article";
import Clap from "../components/Clap";
import { fetchArticleDetails } from "../actions";

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
  componentDidMount() {
    this.props.fetchArticleDetails();
  }
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

const mapStateToProps = ({ data = {} }) => ({
  data
});
export default connect(
  mapStateToProps,
  {
    fetchArticleDetails
  }
)(App);
