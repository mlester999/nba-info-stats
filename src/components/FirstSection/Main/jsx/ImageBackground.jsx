import styles from "../css/ImageBackground.module.css";

export default function ImageBackground(props) {
  return (
    <div
      className="h-full object-center"
      style={{
        backgroundImage: `url(${props.url})`,
      }}
    >
      <div className="h-full bg-black opacity-25"></div>
    </div>
  );
}
