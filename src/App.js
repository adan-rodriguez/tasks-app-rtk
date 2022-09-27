import TasksList from "./components/TasksList";
import Logo from "./assets/images/logo.png";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <img src={Logo} alt="Logo" className="logo" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TasksList />} />
          <Route path="/create-task" element={<TaskForm />} />
          <Route path="/edit-task/:id" element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
