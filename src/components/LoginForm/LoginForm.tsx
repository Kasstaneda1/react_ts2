// Шаг 1: import useState из библиотеки react
import { useState, type ChangeEvent } from "react";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { LoginFormContainer, Title, InputsContainer } from "./styles";
function LoginForm() {
  // Шаг 2: создаем state для храния информации, которую пользователь вводит в элемент input
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // Шаг 3: СОздаем функцию, которая будет ловить данные с клавиатуры которые ввел пользоваетль и класть их в state
  const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const login = (event: any) => {
    event.preventDefault();
    console.log("Email: ", email);
    console.log("Password: ", password);
  };
  return (
    <LoginFormContainer onSubmit={login}>
      <Title>Login form</Title>
      <InputsContainer>
        <Input
          id="email-id"
          name="email"
          type="email"
          placeholder="Enter your email"
          label="Email"
          onChange={onEmailChange}
          value={email}
        />
        <Input
          id="password-id"
          name="password"
          type="password"
          placeholder="Enter your password"
          label="Password"
          onChange={onPasswordChange}
          value={password}
        />
      </InputsContainer>
      <Button name="Login" type="submit" />
    </LoginFormContainer>
  );
}
export default LoginForm;