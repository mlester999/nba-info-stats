import Links from "../../../../shared/Links/jsx/Links";
import styles from "../css/Home.module.css";
import ButtonLinks from "./ButtonLinks";

import Description from "./Description";
import ImageBackground from "./ImageBackground";
import Title from "./Title";

export default function Home() {
  return (
    <div className="flex bg-white" style={{ height: "100vh" }}>
      <div className="flex items-center text-center lg:text-left px-8 md:px-14 lg:w-1/2">
        <div>
          <Title>
            The <span className="text-indigo-600">NBA</span> is Back!
          </Title>

          <Description>
            Get ready for a season of non-stop thrills and spills as the game of
            basketball reaches new heights and the competition reaches a fever
            pitch.
          </Description>

          <ButtonLinks />
        </div>
      </div>
      <div
        className="hidden lg:block lg:w-1/2"
        style={{ clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <ImageBackground url="https://www.si.com/.image/t_share/MTg4MzkyODk3MTM2NTY3NTE1/usatsi_17805741_168395540_lowres.jpg" />
      </div>
    </div>
  );
}
