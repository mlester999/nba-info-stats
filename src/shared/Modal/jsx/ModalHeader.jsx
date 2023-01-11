import styles from "../css/ModalHeader.module.css";

export default function ModalHeader(props) {
  return (
    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
      <h3 className="text-3xl font-semibold">{props.selectingTeam}</h3>
      <button
        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
        onClick={props.handleModal}
      >
        <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
          X
        </span>
      </button>
    </div>
  );
}
