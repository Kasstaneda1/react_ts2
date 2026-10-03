import Message from "homeworks/Homework_13/components/Message/Message";

import { CardWrapper, Author } from "./styles";

function Card() {
  return (
    <CardWrapper>
      <Author>Michael Batuev</Author>
      <Message />
    </CardWrapper>
  );
}

export default Card;
