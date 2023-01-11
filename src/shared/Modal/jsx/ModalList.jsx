import NBA from "nba";
import { useContext, useEffect } from "react";

import NBAInfoContext from "../../../store/nba-info-context";
import styles from "../css/ModalList.module.css";

export default function ModalList(props) {
  const nbaInfo = useContext(NBAInfoContext);

  const spotlightPlayer = () => {
    nbaInfo.highlightPlayer(props.playerId);
  };

  return (
    <div
      onClick={spotlightPlayer}
      className="flex-shrink-0 m-6 hover:bg-gray-300 duration-150 cursor-pointer relative overflow-hidden bg-slate-100 rounded-lg max-w-xs shadow-lg h-max"
    >
      <svg
        className="absolute bottom-0 left-0 mb-8"
        viewBox="0 0 375 283"
        fill="none"
        style={{ transform: "scale(1.5)", opacity: "0.1" }}
      >
        <rect
          x="159.52"
          y="175"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 159.52 175)"
          fill="white"
        />
        <rect
          y="107.48"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 0 107.48)"
          fill="white"
        />
      </svg>
      <div className="relative flex items-center justify-center">
        <div
          className="block absolute w-48 h-48 bottom-0 left-0 -mb-12 -ml-8"
          style={{
            background: "radial-gradient(black, transparent 60%)",
            transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
            opacity: "0.2",
          }}
        ></div>
        <img
          className="relative w-max"
          src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${props.playerId}.png`}
          alt={`${props.firstName} ${props.lastName}`}
        />
      </div>
      <div className="relative text-slate-800 px-6 py-2">
        <span className="block opacity-75 -mb-1">{props.firstName}</span>
        <div className="flex justify-between">
          <span className="block font-semibold text-md">{props.lastName}</span>
        </div>
      </div>
    </div>
  );
}
