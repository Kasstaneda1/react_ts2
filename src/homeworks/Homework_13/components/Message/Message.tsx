import { useContext } from "react";

import { BlogContext } from "homeworks/Homework_13/components/BlogManagement/context";

import { MessageText, EmptyText } from "./styles";

function Message() {
  const { message } = useContext(BlogContext);

  return (
    <>
      {!!message && <MessageText>{message}</MessageText>}
      {!message && <EmptyText>Пока нет записей</EmptyText>}
    </>
  );
}

export default Message;
