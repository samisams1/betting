import React, { Fragment } from "react";
import { Nav } from "../../components/Nav";
import { Drawer } from "../../components/Drawer";
import { Results } from "../../components/Results";
import { TeamForm } from "../../components/TeamForm";
import styled from "styled-components";
import { overGoals } from "../../betTypes";

const CompareLayout = ({
  compare,
  toggleCompare,
  league,
  completedMatches,
  toggleSetLeague,
  standings,
  teamForm,
  homeTeam,
  toggleHomeTeam,
  awayTeam,
  toggleAwayTeam
}) => {
  const setTeam = team => {
    if (homeTeam === null) {
      toggleHomeTeam(team);
    } else if (awayTeam === null) {
      toggleAwayTeam(team);
    } else {
      toggleHomeTeam(null);
      toggleAwayTeam(null);
    }
  };

  return (
    <Fragment>
      <Nav
        league={league}
        toggleSetLeague={toggleSetLeague}
        compare={compare}
        toggleCompare={toggleCompare}
        canCompare={homeTeam && awayTeam}
      />

      <Main>
        <Table>
          <TableRow heading>
            <TableCell heading>Team</TableCell>
            <TableCell heading textAlign="right">
              GF
            </TableCell>
            <TableCell heading textAlign="right">
              GA
            </TableCell>
            <TableCell heading textAlign="right">
              PTS
            </TableCell>
          </TableRow>
          {standings.map((team, index) => (
            <TableRow key={index}>
              <TableCell>
                <button onClick={() => setTeam(team.team.name)}>
                  {team.team.name}
                </button>
              </TableCell>
              <TableCell textAlign="right">{team.goalsFor}</TableCell>
              <TableCell textAlign="right">{team.goalsAgainst}</TableCell>
              <TableCell textAlign="right">{team.points}</TableCell>
            </TableRow>
          ))}
        </Table>
      </Main>
      <Drawer isOpen={compare}>
        <Results team={homeTeam} homeTeam />
        <Results team={awayTeam} />
      </Drawer>
    </Fragment>
  );
};

export default CompareLayout;

const Main = styled.main`
  padding: 1em;
  background: #f6f6f6;
  order: 2;

  @media only screen and (min-width: 768px) {
    flex: 2;
    order: 1;
  }
`;

const Table = styled.div`
  display: table;
  font-size: 0.8rem;
  max-width: 600px;
  border-collapse: collapse;
  background: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  box-shadow: 4px 8px 10px 0px rgba(0, 0, 0, 0.08);
`;

const TableRow = styled.div`
  display: table-row;
  border-bottom: ${props => props.heading && `1px solid #e6e6e6`};
  font-weight: ${props => props.heading && `700`};
`;

const TableCell = styled.div`
  display: table-cell;
  text-align: ${props => props.textAlign};
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 0.5em;
  padding-right: 0.5em;
  width: ${props => props.textAlign && `50px`};
`;

const Button = styled.button`
  background: black;
  appearance: none;
  border: none;
  padding: 0.5em 1em;
  border-radius: 1em;
  color: white;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;
