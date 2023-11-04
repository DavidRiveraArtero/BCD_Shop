import { Route,Routes } from "react-router-dom";
import './App.css'
import { Home } from "./components/Home/home";

function App() {


  return (
    <>
   
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/element" element={<h1 className="text-black">hola Mundo</h1>}/>

    </Routes>
      
    </>
  )
}

export default App
