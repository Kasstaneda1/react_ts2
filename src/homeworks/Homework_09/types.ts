export interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

// Шутка, которая уже лежит в списке: к данным с сервера добавлен свой уникальный номер
export interface JokeInList extends Joke {
  uid: string;
}
