import styles from "../css/ModalHighlightCard.module.css";

export default function ModalHighlightCard(props) {
  return (
    <div className="bg-[#1c1c1c] text-gray-50 overflow-hidden rounded-md max-w-sm p-2 min-h-[500px] flex flex-col">
      <div>
        <h3 className="text-left pl-8 pb-4 pt-2 text-xl">
          {props.highlightedPlayer.fullName}
        </h3>
      </div>

      <div className="flex items-center justify-center bg-[#2a2a2a] min-h-[200px]">
        <a
          className="flex items-center justify-center"
          href="#"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${props.highlightedPlayer.playerId}.png`}
            alt="EasyCode"
            className="object-cover"
          />
        </a>
      </div>
      <div className="grid grid-cols-4">
        <div className="p-4 pr-0 text-lg col-span-3">
          <div className="grid grid-cols-3 gap-8">
            <div className="flex flex-col">
              <p>PTS</p>
              <p>17.8</p>
            </div>
            <div className="flex flex-col">
              <p>AST</p>
              <p>4.9</p>
            </div>
            <div className="flex flex-col">
              <p>REB</p>
              <p>7.6</p>
            </div>
            <div className="flex flex-col">
              <p>BLK</p>
              <p>2.3</p>
            </div>
            <div className="flex flex-col">
              <p>STL</p>
              <p>1.2</p>
            </div>
            <div className="flex flex-col">
              <p>TO</p>
              <p>4.2</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 pt-4">
          <div className="w-20 h-20 shadow-inner shadow-[#2a2a2a] mt-auto ml-auto flex flex-col items-center justify-center">
            <p className="text-semibold text-md">
              6'8" <br /> Height
            </p>
          </div>
          <div className="mt-2 w-20 h-20 shadow-inner shadow-[#2a2a2a] ml-auto flex flex-col items-center justify-center">
            <p className="text-semibold text-md">
              225lb <br /> Weight
            </p>
          </div>
        </div>
      </div>

      <div className="mt-auto text-left">
        <p>Season 2020-2021</p>
      </div>
    </div>
  );
}
