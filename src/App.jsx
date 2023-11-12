import { Route,Routes } from "react-router-dom";
import { useState } from "react";
import './App.css'
import { Home } from "./components/Home/home";
import { HeaderP } from "./components/header/header";
import { FooterP } from "./components/footer/footer";
function App() {

  const [stateMenu, setStateMenu] = useState(false)

  return (
    <>

      <HeaderP stateMenu={stateMenu} setStateMenu={setStateMenu}/>
      <Routes>
        <Route path="/" element={<Home stateMenu={stateMenu}/>}/>
        <Route path="/save" element={<h1 className="text-black">hola Mundo</h1>}/>
      </Routes>
  
      
      
    </>
  )
}

export default App
