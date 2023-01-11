import styles from "../css/Links.module.css";

export default function Links(props) {
  return (
    <a
      className={`px-4 py-3 bg-gray-900 text-gray-200 text-lg font-semibold rounded hover:bg-gray-800 duration-150 ${props.className}`}
      href={props.href}
    >
      {props.children}
    </a>
  );
}
