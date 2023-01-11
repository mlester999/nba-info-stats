import styles from "../css/NavTabs.module.css";
import NavTab from "./NavTab";

export default function NavTabs() {
  return (
    <div className="hidden sm:flex sm:items-center">
      <NavTab href={"#"}>Home</NavTab>
      <NavTab href={"#"}>About Us</NavTab>
      <NavTab href={"#"}>Teams</NavTab>
      <NavTab href={"#"}>Players</NavTab>
    </div>
  );
}
