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
    <footer className="flex flex-row text-black mt-4 ml-4 mr-4 rounded-sm bg-slate-800 bottom-0 fixed w-full "  style={{justifyContent:'space-between'}}>
      <div className="">1</div>
      <div className=" ">2</div>
      <div className="">3</div>
    </footer>
      
    </>
  )
}

export default App
