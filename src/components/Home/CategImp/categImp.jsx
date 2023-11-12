export function CategImp({rowSpan, bg,title,color}){
    return(
        <>
          
            <div className={rowSpan + bg +  color +' shadow-box flex text-black items-center  rounded-md bg-cover bg-center bg-no-repeat'}>
                <div className="relative w-[40%] left-0 flex justify-between">
                    <img src="/img/product/iphons.png" className="  bottom-0 top-0 right-0 left-0 " />
                    <h2 className="font-bold z-10" >{title}</h2>

                </div>

            </div>
      
        
        </>
    )
} 