

import './App.css';
import {Route, Routes} from "react-router-dom"
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Register } from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path={"/"} element={<Home></Home>}></Route>
        <Route path={"/product/:id"}></Route>
        <Route path="/Register" element={<Register></Register>} ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>

      <Footer></Footer>
     
    </div>
  );
}

export default App;
