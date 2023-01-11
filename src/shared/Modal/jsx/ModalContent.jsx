import styles from "../css/ModalContent.module.css";
import ModalHeader from "./ModalHeader";
import ModalHighlightCard from "./ModalHighlightCard";
import ModalList from "./ModalList";

export default function ModalContent(props) {
  const filterPlayers = (player) => {
    return (
      `https://cdn.nba.com/headshots/nba/latest/1040x760/${player.playerId}.png` &&
      player
    );
  };

  const teamPlayers = (player) => {
    return (
      <ModalList
        key={player.playerId}
        firstName={player.firstName}
        lastName={player.lastName}
        playerId={player.playerId}
      />
    );
  };

  return (
    <div
      className="grid grid-cols-3 overflow-y-auto"
      style={{ height: "600px" }}
    >
      <div className="relative p-6 flex-auto">
        <div className="flex flex-col items-center justify-center relative">
          <ModalHighlightCard highlightedPlayer={props.highlightedPlayer} />
        </div>
      </div>

      <div className="grid grid-cols-3 col-span-2 max-h-fit overflow-y-auto">
        {props.selectingPlayers.filter(filterPlayers).map(teamPlayers)}
      </div>
    </div>
  );
}
