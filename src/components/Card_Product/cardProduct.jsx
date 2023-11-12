export function CardProduct({title,desc,price,stock,brand,img}){
    return(
        <>
                <div className="bg-green-300 h-[200px] rounded-md flex flex-col">
                    <h1 className="text-black">{title}</h1>
                    <img className="w-[50%]" src={img}/>
                </div>
        
        </>
    )
}