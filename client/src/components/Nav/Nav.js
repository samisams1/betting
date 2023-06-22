import React from "react";
import styled from "styled-components";
import FootballSVG from "../../assets/svg/football.svg";

const Nav = ({
  league,
  toggleSetLeague,
  compare,
  toggleCompare,
  canCompare
}) => (
  <Navigation>
    <main>
      <Button
        isActive={league === "premierLeague"}
        onClick={() => toggleSetLeague("premierLeague")}
      >
        Premier League
      </Button>
      <Button
        isActive={league === "championship"}
        onClick={() => toggleSetLeague("championship")}
      >
        Championship
      </Button>
    </main>

    <CompareButton
      onClick={() => toggleCompare(!compare)}
      disabled={!canCompare}
    >
      <img src={FootballSVG} alt="Compare Teams" />
      <span>{compare ? "Reset Teams" : "Compare Teams"}</span>
    </CompareButton>
  </Navigation>
);

export default Nav;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6;
  background: #ffffff;
  font-size: 0.8rem;
`;

const Button = styled.button`
  position: relative;
  padding: 1.5em 1em;
  margin-right: 1.5em;
  font-weight: ${props => (props.isActive ? `700` : `400`)};

  &:before {
    display: ${props => (props.isActive ? "block" : "none")};
    content: "";
    position: absolute;
    bottom: -4px;
    left: calc(50% - 8px);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #f6f6f6;
    z-index: 1;
  }

  &:after {
    display: ${props => (props.isActive ? "block" : "none")};
    content: "";
    position: absolute;
    bottom: -4px;
    left: calc(50% - 9px);
    width: 0;
    height: 0;
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    border-bottom: 9px solid #e6e6e6;
  }
`;

const CompareButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  padding: 1.5em 1em;
  z-index: 10;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  img {
    display: block;
    max-height: 20px;
    margin-right: 10px;
  }
`;
