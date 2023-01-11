import styles from "../css/ModalBackground.module.css";

export default function ModalBackground(props) {
  return (
    <div
      onClick={props.handleModal}
      className="opacity-50 fixed inset-0 bg-black"
    ></div>
  );
}
