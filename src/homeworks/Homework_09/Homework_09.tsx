import { useState } from "react";
import axios from "axios";
import { v4 } from "uuid";

import Button from "components/Button/Button";

import { type Joke, type JokeInList } from "./types";
import {
  PageWrapper,
  Card,
  Title,
  JokesList,
  JokeItem,
  JokeRow,
  JokeText,
  Setup,
  Punchline,
  ErrorText,
  ButtonControl,
} from "./styles";

function Homework_09() {
  const [jokes, setJokes] = useState<JokeInList[]>([]);
  const [error, setError] = useState<undefined | string>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const JOKE_URL: string = "https://official-joke-api.appspot.com/random_joke";

  const getJoke = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get<Joke>(JOKE_URL);
      // Новая шутка добавляется в конец списка, старые остаются на месте
      setJokes((prevJokes: JokeInList[]): JokeInList[] => {
        return [...prevJokes, { ...response.data, uid: v4() }];
      });
      setError(undefined);
    } catch {
      // Запрос упал - показываем ошибку, но уже набранный список не трогаем
      setError("Some Network Error");
    } finally {
      setIsLoading(false);
    }
  };

  // Удаление: оставляем все шутки, кроме той, на кнопку которой нажали
  const onDelete = (uid: string): void => {
    setJokes((prevJokes: JokeInList[]): JokeInList[] => {
      return prevJokes.filter((joke: JokeInList): boolean => {
        return joke.uid !== uid;
      });
    });
  };

  return (
    <PageWrapper>
      <Card>
        <Title>Random jokes</Title>
        <JokesList>
          {jokes.map((joke: JokeInList) => {
            return (
              <JokeItem key={joke.uid}>
                <JokeRow>
                  <JokeText>
                    <Setup>{joke.setup}</Setup>
                    <Punchline>{joke.punchline}</Punchline>
                  </JokeText>
                  <ButtonControl>
                    <Button
                      name="Delete"
                      isRed={true}
                      onClick={() => onDelete(joke.uid)}
                    />
                  </ButtonControl>
                </JokeRow>
              </JokeItem>
            );
          })}
        </JokesList>
        {!!error && <ErrorText>{error}</ErrorText>}
        <Button disabled={isLoading} name="Get new joke" onClick={getJoke} />
      </Card>
    </PageWrapper>
  );
}

export default Homework_09;
