import { IconsP } from "../icon/icon"
import HomeSvg from '/svg/Home.svg';
import Save from '/svg/save.svg'
export function FooterP(){
    return (
        <>
            <footer className="fixed bottom-0 ">
                <section className="flex  flex-row justify-between text-white bg-[#36434B] w-screen  p-2">
                    <IconsP svg={HomeSvg} title={"Home"} isActive={true} />
                    <IconsP svg={Save} title={"Save"} isActive={false}/>
                    <IconsP svg={Save} title={"Carrito"} isActive={false}/>
                </section>
            </footer>
        
        </>
    )
}