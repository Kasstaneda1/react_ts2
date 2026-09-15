import { useState } from "react";
import Button from "components/Button/Button";
import "./styles.css";
function Counter() {
  const [count, setCount] = useState<number>(0);
  const onMinus = (): void => {
    setCount((prevValue: number): number => {
      return prevValue - 1;
    });
  };
  const onPlus = (): void => {
    setCount((prevValue: number): number => {
      return prevValue + 1;
    });
  };
  return (
    <div className="counter_wrapper">
      <div className="button_control">
        <Button name="-" onClick={onMinus} />
      </div>
      <p className="count">{count}</p>
      <div className="button_control">
        <Button name="+" onClick={onPlus} />
      </div>
    </div>
  );
}
export default Counter;
