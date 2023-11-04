import { Link } from "react-router-dom"
import { InputP } from "../input/input"
import './home.css'
export function Home (){
    return(
        <>
            <InputP />
            <Link to="/element"  className="sectionGamer rounded-lg m-4 pb-12 pt-12 bg-gradient-to-b from-black via-neutral-600 to-slate-300 flex flex-row items-center">
                <div className="box_img ml-4"/>
                <h2 className=" absolute max-sm:text-3xl  max-sm:w-[200px] ml-[140px]">Lo mejor para los Gamers</h2>
            </Link>
          
        </>
    )
}