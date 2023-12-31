import { useEffect,useState } from "react"
import { Link } from "react-router-dom"
export function IconsP({svg,title, isActive}){

    const [ruta,setRuta] = useState(title)

    useEffect(()=>{
        if(isActive){
            const butn = document.getElementsByName(title)[0]
            butn.classList.add("active") 
        }
        if(ruta == "Home"){
            setRuta("")
        }

    },[])
  
       


    

    function changeActive(){
        const butnG = document.getElementsByClassName("btn_footer")
        const butn = document.getElementsByName(title)[0]

        
        for(var x = 0; x<butnG.length;x++){
            if(butnG[x].classList.contains("active")){
                butnG[x].classList.remove("active")
            }
        }

        butn.classList.add("active")
        
    }

    return (
        <>
            <Link to={'/'+ ruta.toLowerCase()} name={title} onClick={changeActive} className="btn_footer w-full text-center flex flex-row  items-center  p-1">
                <img loading="lazy" src={svg} alt="home" width="10%" className="m-4 justify-center" />
                <h1 className="text-3xl text_menu text-center">{title}</h1>
            </Link>
        </>
    )
}