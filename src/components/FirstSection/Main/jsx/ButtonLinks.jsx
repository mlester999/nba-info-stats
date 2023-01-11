import Links from "../../../../shared/Links/jsx/Links";
import styles from "../css/ButtonLinks.module.css";

export default function ButtonLinks() {
  return (
    <div className="flex justify-center lg:justify-start mt-6">
      <Links href="#">Get Started</Links>

      <Links
        className="mx-4 bg-gray-300 text-gray-900 hover:bg-gray-400"
        href="#"
      >
        Learn More
      </Links>
    </div>
  );
}
