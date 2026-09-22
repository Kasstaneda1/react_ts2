import { useState, useEffect } from "react";
import axios from "axios";

import Button from "components/Button/Button";

import { type Joke } from "./types";
import {
  PageWrapper,
  Card,
  Title,
  JokeContainer,
  Setup,
  Punchline,
  ErrorText,
} from "./styles";

function Homework_09() {
  const [joke, setJoke] = useState<undefined | Joke>(undefined);
  const [error, setError] = useState<undefined | string>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const JOKE_URL: string = "https://official-joke-api.appspot.com/random_joke";

  const getJoke = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(JOKE_URL);
      // Запрос прошел успешно - кладем шутку в state и убираем прошлую ошибку
      setJoke(response.data);
      setError(undefined);
    } catch {
      // Запрос упал - кладем текст ошибки в state и убираем прошлую шутку
      setJoke(undefined);
      setError("Some Network Error");
    } finally {
      setIsLoading(false);
    }
  };

  // MOUNTING - пустой массив зависимостей, запрос уходит один раз при появлении компонента
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getJoke();
  }, []);

  return (
    <PageWrapper>
      <Card>
        <Title>Random joke</Title>
        <JokeContainer>
          {!!joke && <Setup>{joke.setup}</Setup>}
          {!!joke && <Punchline>{joke.punchline}</Punchline>}
          {!!error && <ErrorText>{error}</ErrorText>}
        </JokeContainer>
        <Button
          disabled={isLoading}
          name="Get new joke"
          onClick={getJoke}
        />
      </Card>
    </PageWrapper>
  );
}

export default Homework_09;
