import { BrowserRouter } from "react-router-dom";
//import { Route, Routes } from "react-router-dom";

import GlobalStyles from "styles/GlobalStyles";
//import Layout from "components/Layout/Layout";
//import { ROUTES } from "constants/routes";

// Pages
//import Home from "pages/EmployeeApp/Home/Home";
//import About from "pages/EmployeeApp/About/About";
//import LogIn from "pages/EmployeeApp/LogIn/LogIn";
//import ContactUs from "pages/EmployeeApp/ContactUs/ContactUs";
//import Clients from "pages/EmployeeApp/Clients/Clients";
//import Apple from "pages/EmployeeApp/Clients/Apple/Apple";
//import Google from "pages/EmployeeApp/Clients/Google/Google";
//import Facebook from "pages/EmployeeApp/Clients/Facebook/Facebook";

// Lessons
//import Lesson_06 from "lessons/Lesson_06/Lesson_06";
//import Lesson_07 from "lessons/Lesson_07/Lesson_07";
//import Lesson_07_Practice from "lessons/Lesson_07_Practice/Lesson_07_Practice";
//import Lesson_08 from "lessons/Lesson_08/Lesson_08";
//import Lesson_09 from "lessons/Lesson_09/Lesson_09";
//import Lesson_10 from "lessons/Lesson_10/Lesson_10";
//import Lesson_11 from "lessons/Lesson_11/Lesson_11";
//import Lesson_13 from "lessons/Lesson_13/Lesson_13";

// Homeworks
//import Homework_07 from "homeworks/Homework_07/Homework_07";
//import Homework_09 from "homeworks/Homework_09/Homework_09";
//import Homework_10 from "homeworks/Homework_10/Homework_10";
import Homework_13 from "homeworks/Homework_13/Homework_13";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      {/* Сайт с маршрутами. Чтобы включить, раскомментируйте этот блок
          и импорты страниц, Layout, ROUTES, Route и Routes сверху файла
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.LOGIN} element={<LogIn />} />
          <Route path={ROUTES.CONTACT_US} element={<ContactUs />} />
          <Route path={ROUTES.CLIENTS} element={<Clients />} />
          <Route path={ROUTES.APPLE} element={<Apple />} />
          <Route path={ROUTES.GOOGLE} element={<Google />} />
          <Route path={ROUTES.FACEBOOK} element={<Facebook />} />
          <Route path={ROUTES.NOT_FOUND} element="Page is not found!!!" />
        </Routes>
      </Layout> */}
      {/* <Lesson_06 /> */}
      {/* <Lesson_07 /> */}
      {/* <Lesson_07_Practice /> */}
      {/* <Lesson_08 /> */}
      {/* <Lesson_09 /> */}
      {/* <Lesson_10 /> */}
      {/* <Lesson_11 /> */}
      {/* <Lesson_13 /> */}
      {/* <Homework_07 /> */}
      {/* <Homework_09 /> */}
      {/* <Homework_10 /> */}
      <Homework_13 />
    </BrowserRouter>
  );
}

export default App;
