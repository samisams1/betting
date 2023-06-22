import React from "react";
import styled from "styled-components";

const Results = ({ homeTeam, team }) => (
  <Article hasBorder={homeTeam}>
    <Header>
      <h3>{homeTeam ? "Home Team" : "Away Team"}</h3>
      <span>{team}</span>
    </Header>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet
      porta vulputate. Phasellus ligula sapien, gravida ac varius ut, blandit at
      erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
      per inceptos himenaeos. Nam viverra ligula dui, a viverra nisl porta ut.
      Mauris euismod lorem sed aliquam cursus. Nunc molestie quis elit id
      feugiat. Sed vitae molestie mauris. Proin bibendum nibh ut maximus
      pharetra. Maecenas non mauris vulputate, consectetur libero luctus, cursus
      arcu.
    </p>
  </Article>
);

export default Results;

const Article = styled.article`
  flex: 1;
  padding: 1em;
  border-right: 1px solid
    ${props => (props.hasBorder ? "#e6e6e6" : "transparent")};
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
