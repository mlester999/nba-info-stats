import styles from "../css/ContactInfo.module.css";

export default function ContactInfo(props) {
  return (
    <div className="hidden sm:flex sm:items-center">
      <a
        href={props.href}
        className="text-slate-100 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-blue-600 hover:border-blue-600 duration-150"
      >
        {props.children}
      </a>
    </div>
  );
}
