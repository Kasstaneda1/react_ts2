import { useState, type ChangeEvent } from "react";

import Button from "components/Button/Button";
import Card from "homeworks/Homework_13/components/Card/Card";

import { BlogContext } from "./context";
import { BlogWrapper, Title, MessageArea, ButtonControl } from "./styles";

function BlogManagement() {
  const [text, setText] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const onTextChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setText(event.target.value);
  };

  const onPost = (): void => {
    setMessage(text);
    setText("");
  };

  return (
    <BlogContext.Provider value={{ message: message }}>
      <BlogWrapper>
        <Title>Blog management</Title>
        <MessageArea
          value={text}
          onChange={onTextChange}
          placeholder="Что у вас нового?"
        />
        <ButtonControl>
          <Button name="Запостить" onClick={onPost} />
        </ButtonControl>
        <Card />
      </BlogWrapper>
    </BlogContext.Provider>
  );
}

export default BlogManagement;
