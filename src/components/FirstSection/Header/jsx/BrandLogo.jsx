import styles from "../css/BrandLogo.module.css";

export default function BrandLogo(props) {
  return (
    <div>
      <img className={styles["nba-logo"]} src={props.src} alt="NBA Logo" />
    </div>
  );
}
