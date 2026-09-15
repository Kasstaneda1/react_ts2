import "./styles.css";
import { ToastContainer } from "react-toastify";
import Feedback from "components/Feedback/Feedback";
import Input from "components/Input/Input";
function Homework_07() {
  return (
    <div className="homework_07_wrapper">
      <h1 className="homework_07_title">Homework 07</h1>
      <form className="homework_07_form">
        <Input
          id="user_name"
          name="userName"
          type="text"
          label="Name"
          placeholder="Enter your name"
        />
        <Input
          id="user_email"
          name="userEmail"
          type="email"
          label="Email"
          placeholder="Enter your email"
        />
        <Input
          id="user_password"
          name="userPassword"
          type="password"
          label="Password"
          placeholder="Enter your password"
        />
      </form>
      <Feedback />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}
export default Homework_07;
