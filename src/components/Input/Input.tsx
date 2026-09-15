import "./styles.css";
import { type InputProps } from "./types";
function Input({ name, type = "text", placeholder, label, id }: InputProps) {
  return (
    <div className="input_component">
      <label className="input_label" htmlFor={id}>
        {label}
      </label>
      <input
        className="input_input"
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
export default Input;
