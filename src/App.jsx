import { Route,Routes } from "react-router-dom";
import './App.css'
import { Home } from "./components/Home/home";

import { FooterP } from "./components/footer/footer";
function App() {


  return (
    <>
   
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/save" element={<h1 className="text-black">hola Mundo</h1>}/>
    </Routes>
    <FooterP/>
      
    </>
  )
}

export default App
