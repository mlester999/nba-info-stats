import styles from "../css/NavBar.module.css";

import BrandLogo from "./BrandLogo";
import ContactInfo from "./ContactInfo";
import NavTabs from "./NavTabs";

export default function NavBar(props) {
  return (
    <nav className="bg-black shadow absolute w-full z-10">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between py-4">
          <BrandLogo src={"https://cdn.nba.com/logos/leagues/logo-nba.svg"} />

          <NavTabs />

          <ContactInfo href={"https://www.facebook.com/mlester999/"}>
            Contact Us
          </ContactInfo>
        </div>
      </div>
    </nav>
  );
}
