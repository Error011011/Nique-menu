import { FC } from "react";



export const Header:FC  = () => {
    

 return (
    <header className="pt-5 pb-7 bg-header-image bg-no-repeat bg-cover h-[100svh] bg-center">
        <div className="container">
            <div className="flex flex-col justify-between items-center w-[100%] h-[100svh] text-center ">
                <h1 className="font-chillax text-[32px] sm:text-[40px] lg:text-[50px]">nique.</h1>


                <div>
                    <span className=" font-bitter text-[24px] text-bg-primary sm:text-[35px] lg:text-[50px]">The pure taste of</span>
                    <h1 className="font-chillax text-[2.5rem] sm:text-[3.5rem] lg:text-[5rem]">Thailand</h1>
                    <p className="font-chillax sm:text-[20px] lg:text-[25px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, enim temporibus ab saepe libero, illum facilis repellat consequuntur voluptates rerum necessitatibus iure animi asperiores? Quibusdam omnis voluptatibus labore dolorem harum?</p>
                </div>  

                <div className="p-[15px] border-2 rounded-full sm:text-[18px] mb-9">
                    <a href="#menu">View menu</a>
                </div>
            </div>
        </div>
    </header>
 )
}