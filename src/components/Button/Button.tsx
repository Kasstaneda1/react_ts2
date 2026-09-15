import "./styles.css";
import { type ButtonProps } from "./types"

function Button({name, type, onClick = () => {}}: ButtonProps) {
  return (
    <button className="button_component" type={type} onClick={onClick}>
      {name}
    </button>
  );
}
export default Button;