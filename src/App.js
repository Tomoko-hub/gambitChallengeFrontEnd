import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Register from "./pages/user/Register"
import Login from "./pages/user/Login"
import ReadAllResuts from './pages/result/ReadAllResuts';
import ReadSingle from './pages/result/ReadSingle';
import Create from './pages/result/Create';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/user/register"
          element={<Register />}
         />
        <Route
          path="/user/login"
          element={<Login />}
         />
        <Route
          path="/"
          element={<ReadAllResuts />}
         />
        <Route
          path="/result/:id"
          element={<ReadSingle />}
         />
        <Route
          path="/result/create"
          element={<Create />}
         />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
