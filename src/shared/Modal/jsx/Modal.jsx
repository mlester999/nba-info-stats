import { useContext } from "react";
import NBAInfoContext from "../../../store/nba-info-context";
import styles from "../css/Modal.module.css";

import ModalBackground from "./ModalBackground";
import ModalContent from "./ModalContent";
import ModalHeader from "./ModalHeader";

export default function Modal(props) {
  const nbaInfo = useContext(NBAInfoContext);

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto z-10 max-w-6xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <ModalHeader
            selectingTeam={nbaInfo.nbaState.selectingTeam}
            handleModal={props.handleModal}
          />

          <ModalContent
            selectingPlayers={nbaInfo.nbaState.selectingPlayers}
            highlightedPlayer={nbaInfo.nbaState.highlightedPlayer}
          />
        </div>
      </div>
      <ModalBackground handleModal={props.handleModal} />
    </div>
  );
}
