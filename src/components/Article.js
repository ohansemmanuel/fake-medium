import React from "react";
import styled from "styled-components";

const StyledArticle = styled.div`
  h1 {
    font-weight: 700;
    font-size: 36px;
    color: #000000;
    margin: 0;
  }
  h4 {
    font-weight: 700;
    font-size: 20px;
    color: #000000;
    margin: 0.5rem 0 4rem 0;
  }
  p {
    font-weight: 300;
    font-size: 18px;
    color: #4a4a4a;
  }
`;

const Article = ({ title = "", subtitle = "", paragraphs = [] }) => {
  return (
    <StyledArticle>
      <h1>{title}</h1>
      <h4>{subtitle}</h4>
      {paragraphs.map(paragraph => (
        <p key={paragraph.text}>{paragraph.text}</p>
      ))}
    </StyledArticle>
  );
};

export default Article;
