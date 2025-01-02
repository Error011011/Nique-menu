import { FC } from "react";
import { useMenuStore } from "../store/store";

interface ISection {
    id: string
    title: string
    items: IItem[]
}

interface IItem {
    name: string
    price: number
    oldPrice: number
    description: string
    img: string
    tags: string[]
}

export const Menu:FC = () => {

    const menu = useMenuStore((state:any) => state.menu)
    
    
    return (
        <main  className="bg-bg-default py-[60px]" id="menu">
            <div className="container">
                <div className="flex flex-col items-center">

                    <nav className="overflow-visible mb-[40px]">
                        <ul className="flex gap-[10px] sm:gap-[15px] md:gap-[35px] lg:gap-[50px]  md:text-[20px] lg:text-[25px] ">
                            <li><a href="#starters">Starters</a></li>
                            <li><a href="#lunch">Lunch</a></li>
                            <li><a href="#dinner">Dinner</a></li>
                            <li><a href="#wine">Wine</a></li>
                            <li><a href="#drinks">Drinks</a></li>
                        </ul>
                    </nav>


                    {/* sections */}

                    {
                        menu.map((section: ISection) => {
                            const {id, title, items} = section
                            
                            return (
                                <div id={id}>
                                    <h2 className="font-bitter text-text-primary text-[64px]">{title}</h2>
                                    <ul>
                                        {
                                            items.map((item: IItem) => {
                                                const {name, price, oldPrice, description, img} = item

                                                return (
                                                    <li className="py-[16px] pl-[16px] pr-[24px] relative flex gap-3 items-center lg:text-[20px]">
                                                        {
                                                            oldPrice ? <span className="absolute top-0 right-0"><span className="line-through text-white-muted mr-2 ">${oldPrice}</span>${price}</span> : <span className="absolute top-0 right-0">${price}</span>
                                                        }
                                                        <span className="absolute top-0 right-0">${price}</span>
                                                        <img className="w-[90px] h-[72px] lg:w-[100px] lg:h-[92px]" src={img} alt="meal" />
                                                        <div>
                                                            <h3 className="font-chillax text-[20px] lg:text-[35px]">{name}</h3>
                                                            <p className="font-chillax lg:text-[20px]">{description}</p>
                                                        </div>
                                                    </li>
                                                )
                                                
                                            })
                                        }
                                        
                                    </ul>
                                </div>
                            )
                            
                        })
                    }

                    


                    
                </div>
            </div>
        </main>
    )
}