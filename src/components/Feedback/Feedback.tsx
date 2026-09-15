import "./styles.css";
import { useState } from "react";
import { toast } from "react-toastify";
import Button from "components/Button/Button";
function Feedback() {
  const [likes, setLikes] = useState<number>(0);
  const [dislikes, setDislikes] = useState<number>(0);

  const onLike = (): void => {
    setLikes((prevValue: number): number => {
      return prevValue + 1;
    });
    toast.success("Plus + 1 Like");
  };

  const onDislike = (): void => {
    setDislikes((prevValue: number): number => {
      return prevValue + 1;
    });
    toast.warning("Plus + 1 Dislike");
  };

  const onReset = (): void => {
    setLikes(0);
    setDislikes(0);
    toast.info("Reset all results");
  };

  console.log("Rendering(updating) component Feedback", likes, dislikes);

  return (
    <div className="feedback_wrapper">
      <div className="feedback_results">
        <p className="feedback_count">Likes: {likes}</p>
        <p className="feedback_count">Dislikes: {dislikes}</p>
      </div>
      <div className="feedback_controls">
        <div className="feedback_button">
          <Button name="Like" type="button" onClick={onLike} />
        </div>
        <div className="feedback_button">
          <Button name="Dislike" type="button" onClick={onDislike} />
        </div>
        <div className="feedback_button">
          <Button name="Reset" type="button" onClick={onReset} />
        </div>
      </div>
    </div>
  );
}
export default Feedback;
