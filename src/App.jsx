import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./User";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/client" element={<User />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/update/:id" element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
