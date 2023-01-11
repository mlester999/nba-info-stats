import React, { useEffect, useReducer } from "react";
import NBA from "nba";

const NBAInfoContext = React.createContext({
  nbaPlayers: NBA.players,
  nbaTeams: NBA.teams,
  selectingPlayers: [],
  selectingTeams: [],
  highlightedPlayer: {},
});

const nbaReducer = (state, action) => {
  if (action.type === "VIEW_PLAYERS") {
    const teamId = NBA.teamIdFromName(action.team);
    const players = state.nbaPlayers.filter(
      (player) => player.teamId === Number(teamId)
    );

    return {
      nbaPlayers: state.nbaPlayers,
      nbaTeams: state.nbaTeams,
      selectingPlayers: [...players],
      selectingTeam: action.team,
      highlightedPlayer: players[0],
    };
  }

  if (action.type === "HIGHLIGHT_PLAYER") {
    const players = state.selectingPlayers.filter(
      (player) => player.playerId === Number(action.playerInfo)
    );

    console.log(action.playerInfo);

    return {
      nbaPlayers: state.nbaPlayers,
      nbaTeams: state.nbaTeams,
      selectingPlayers: state.selectingPlayers,
      selectingTeam: state.selectingTeam,
      highlightedPlayer: players[0],
    };
  }

  return {
    nbaPlayers: NBA.players,
    nbaTeams: NBA.teams,
    selectingPlayers: [],
    selectingTeam: "",
    highlightedPlayer: {},
  };
};

const NBAProviders = (props) => {
  const [nbaState, dispatchNba] = useReducer(nbaReducer, {
    nbaPlayers: NBA.players,
    nbaTeams: NBA.teams,
    selectingPlayers: [],
    selectingTeam: [],
    highlightedPlayer: {},
  });

  const viewPlayers = (team) => {
    dispatchNba({ type: "VIEW_PLAYERS", team: team });
  };

  const findPlayer = (playerName) => {
    dispatchNba({ type: "FIND_PLAYER", playerName: playerName });
  };

  const highlightPlayer = (playerInfo) => {
    dispatchNba({ type: "HIGHLIGHT_PLAYER", playerInfo: playerInfo });
  };

  return (
    <NBAInfoContext.Provider
      value={{
        nbaState: nbaState,
        findPlayer: findPlayer,
        highlightPlayer: highlightPlayer,
        viewPlayers: viewPlayers,
      }}
    >
      {props.children}
    </NBAInfoContext.Provider>
  );
};

export { NBAProviders };

export default NBAInfoContext;
