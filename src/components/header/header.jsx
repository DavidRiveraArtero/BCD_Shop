import { InputP } from "../input/input"
import MenuSvg from '/svg/menu.svg'

export function HeaderP(){
    return(
        <>
            <div className="flex flex-row items-center justify-between p-3">
                <InputP></InputP>
                <button className="bg-gray-700 m-1  p-2 flex justify-center rounded-md text-center">
                    <img src={MenuSvg} alt="menu" width="60%"/>
                </button>
            </div>
        </>
    )
}