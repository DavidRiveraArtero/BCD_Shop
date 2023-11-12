import { InputP } from "../input/input"
import MenuSvg from '/svg/menu.svg'
import { IconsP } from "../icon/icon"
import HomeSvg from '/svg/Home.svg';
import Save from '/svg/save.svg'
export function HeaderP({stateMenu, setStateMenu }){

    function changeStateMenu(){
        setStateMenu(!stateMenu)
    }

    return(
        <>
            {
                stateMenu ? 
                <>  
                    
                    <div className="absolute w-full h-screen z-20 bg-white/70">
                        <div className="flex flex-row justify-end ">
                            
                            <button onClick={changeStateMenu} className=" rounded-md bg-gray-700  text-2xl flex justify-end p-1.5 m-4 ">
                                    ❌
                            </button>
                        </div>
                       
                        <div className="flex flex-col p-4  justify-center  text-black items-center">
                            
                            <IconsP svg={HomeSvg} title={"Home"} isActive={true} />
                            <IconsP svg={Save} title={"Save"} isActive={false}/>
                            <IconsP svg={Save} title={"Carrito"} isActive={false}/>
                        </div>
                    </div> 
                
                </>
                
                
                :
                ""
            }
            
            <div className="flex flex-row items-center justify-between p-3">
                <InputP stateMenu={stateMenu}/>
                {
                    !stateMenu ? 
                    <button onClick={changeStateMenu} className="bg-gray-700 m-1  p-[8.5px] flex justify-center rounded-md text-center">
                        <img loading="lazy" src={MenuSvg} alt="menu" width="60%"/>
                    </button>
                    :
                    ""
                }
               
            </div>
            
        </>
    )
}