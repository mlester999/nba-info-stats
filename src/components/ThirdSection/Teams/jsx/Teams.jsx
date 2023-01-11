import { useContext } from "react";
import styles from "../css/Teams.module.css";

import Card from "../../../../shared/Buttons/jsx/Card";
import NBAInfoContext from "../../../../store/nba-info-context";

export default function Teams(props) {
  const nbaInfo = useContext(NBAInfoContext);

  const allNbaData = (nba) => {
    return (
      <Card
        key={nba.teamId}
        src={`https://cdn.nba.com/logos/nba/${nba.teamId}/global/L/logo.svg`}
        title={nba.teamName}
        text="View Players"
        handleModal={props.handleModal}
      />
    );
  };

  return (
    <div className="grid grid-cols-5 h-full bg-gradient-to-br from-blue-500 to-blue-800">
      {nbaInfo.nbaState.nbaTeams.map(allNbaData)}
    </div>
  );
}
