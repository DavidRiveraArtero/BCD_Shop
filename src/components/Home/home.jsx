import { Link } from "react-router-dom"

import './home.css'
export function Home (){
    return(
        <>
    
            <Link to="/element"  className="sectionGamer rounded-lg m-4 pb-12 pt-12 bg-gradient-to-b from-black via-neutral-600 to-slate-300 flex flex-row items-center">
                <div className="box_img sm:w-72 sm:h-36 sm:ml-9 ml-4"/>
                <h2 className=" absolute text-3xl sm:ml-64 sm:w-40   max-sm:w-[200px] ml-[140px]">Lo mejor para los Gamers</h2>
            </Link>
            <section className="grid grid-cols-2 gap-4 grid-rows-2 m-4 h-[390px]">
               <div className="row-span-2 text-black bg-red-500 rounded-md bg-home_img bg-cover bg-center bg-no-repeat">
                    1
               </div>
               <div className="col-span-1 text-black bg-blue-500 rounded-md">
                    2
               </div>
               <div className="col-span-1 text-black bg-green-500 rounded-md">
                    3
               </div>

            </section>
          
        </>
    )
}