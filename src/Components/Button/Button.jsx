import "./Button.css";

export default function Button({ type, text }) {
  return <button type={type}>{text}</button>;
}
