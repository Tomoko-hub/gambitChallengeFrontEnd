import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Register from "./pages/user/Register"
import Login from "./pages/user/Login"
import ReadAllResuts from './pages/result/ReadAllResuts';
import ReadSingle from './pages/result/ReadSingle';
import Create from './pages/result/Create';
import Update from './pages/result/Update';
import Delete from './pages/result/Delete';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
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
          <Route
            path="/result/update/:id"
            element={<Update />}
          />
          <Route
            path="/result/delete/:id"
            element={<Delete />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
