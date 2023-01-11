import { useContext } from "react";

import NBAInfoContext from "../../../store/nba-info-context";
import styles from "../css/Card.module.css";

import CardButton from "./CardButton";
import CardImage from "./CardImage";
import CardTitle from "./CardTitle";

export default function Card(props) {
  const nbaInfo = useContext(NBAInfoContext);

  const buttonHandler = () => {
    nbaInfo.viewPlayers(props.title);

    props.handleModal();
  };

  return (
    <div className="flex flex-col justify-between bg-white font-semibold text-center rounded-3xl border shadow-lg px-8 py-4 m-12">
      <CardImage src={props.src} />
      <CardTitle>{props.title}</CardTitle>
      <CardButton onClick={buttonHandler}>{props.text}</CardButton>
    </div>
  );
}
