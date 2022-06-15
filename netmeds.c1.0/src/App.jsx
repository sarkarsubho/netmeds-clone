

import './App.css';
import {Route, Routes} from "react-router-dom"
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path={"/"} element={<Home></Home>}></Route>
      </Routes>

      <Footer></Footer>
     
    </div>
  );
}

export default App;
