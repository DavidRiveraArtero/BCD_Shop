export function CategImp({rowSpan, bg,title,color}){
    return(
        <>
          
            <div className={rowSpan + bg +  color +' shadow-box flex flex-row items-center  text-black justify-center  rounded-md bg-cover bg-center bg-no-repeat'}>
        
                    <div className="relative ">
                        <h2 className="font-bold p-2" >{title}</h2>
                    </div>  
                    <div className="absolute w-auto flex justify-end ">
                        <img src="/img/product/iphons.png" className=" w-[20%] " />
                    </div>
            

            </div>
      
        
        </>
    )
} 