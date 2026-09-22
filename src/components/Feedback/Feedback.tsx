import { useState } from "react";
import { toast } from "react-toastify";
import Button from "components/Button/Button";
import {
  FeedbackWrapper,
  ResultsContainer,
  Count,
  ControlsContainer,
  ButtonControl,
} from "./styles";
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
    <FeedbackWrapper>
      <ResultsContainer>
        <Count>Likes: {likes}</Count>
        <Count>Dislikes: {dislikes}</Count>
      </ResultsContainer>
      <ControlsContainer>
        <ButtonControl>
          <Button name="Like" type="button" onClick={onLike} />
        </ButtonControl>
        <ButtonControl>
          <Button name="Dislike" type="button" onClick={onDislike} />
        </ButtonControl>
        <ButtonControl>
          <Button name="Reset" type="button" onClick={onReset} />
        </ButtonControl>
      </ControlsContainer>
    </FeedbackWrapper>
  );
}
export default Feedback;
