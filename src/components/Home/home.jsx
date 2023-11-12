import { Link } from "react-router-dom"
import { CardProduct } from "../Card_Product/cardProduct"
import './home.css'
import  products  from '../../assets/json/products.json'
import { CategImp } from "./CategImp/categImp"



export function Home ({stateMenu}){
    return(
        <>
            <main className={!stateMenu ? "" : "blur-sm"}>
                <Link to="/element"  className="shadow-box rounded-lg m-4 pb-12 pt-12 bg-gradient-to-b from-black via-neutral-600 to-slate-300 flex flex-row items-center">
                    <div className="box_img sm:w-72 sm:h-36 sm:ml-9 ml-4"/>
                    <h2 className=" absolute text-3xl sm:ml-64 sm:w-40   max-sm:w-[200px] ml-[140px]">Lo mejor para los Gamers</h2>
                </Link>
                <section className="grid grid-cols-2 gap-4 grid-rows-2 m-4 h-[229px]">
                   <CategImp rowSpan={"row-span-2 "} title={"HOME DECORATION"} bg={" bg-home_img"} color={" text-black "}/>
                   <CategImp rowSpan={"col-span-1 "} title={"FRAGANCES"} bg={" bg-fragance_img "} color={" text-black "}/>
                   <CategImp rowSpan={"col-span-1 "} title={"APPLE"} bg={" bg-apple_img"} color={" text-white "}/>
                </section>
                <h1 className="text-black">Apple</h1>
                <section className="grid grid-cols-2 gap-4  m-4">
                    
                    {
                        products.products.map((product, index) => {
                            if(product.brand == "Apple")
                            return <CardProduct 
                                        title={product.title}
                                        desc={product.description}
                                        price={product.price}
                                        stock={product.stock}
                                        brand={product.brand}
                                        img={product.thumbnail}  />
                        })
                    }
                </section>
            </main>
          
        </>
    )
}