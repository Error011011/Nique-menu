import { FC } from "react";

const pages = ['Menu', 'Restaurant', 'Classes', 'Book a table', 'Contact', 'Blog', 'Shop']
const utility = ['Stleguide', 'Licensing', 'Changelog', '404 page']


export const Footer:FC  = () => {
    return (
        <footer className="py-[60px] bg-bg-default">
            <div className="container">
                <div className="flex flex-col gap-5 max-w-[1200px] items-center md:flex-row md:justify-between md:items-start ">

                    <div className="flex flex-col gap-5 justify-center items-center">
                        <h1 className="font-chillax text-[32px]">nique.</h1>
                        
                        <div className="flex flex-col items-center font-chillax text-[14px] text-white-muted leading-[1.4] sm:text-[20px]">
                            <span>By Pawel Gola</span>
                            <span>Powered by Webflow</span>
                        </div>
                    </div>
                    
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="mb-3 ont-chillax text-[22px] sm:text-[25px]">Pages</h4>
                        <ul className="flex flex-col gap-2 items-center text-[16px] leading-[1.6] sm:text-[18px] md:items-start">
                            {
                                pages.map((page) => {
                                    return (
                                        <li><a href="#" className="text-white-muted">{page}</a></li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="mb-3 ont-chillax text-[22px] sm:text-[25px]">Utility Pages</h4>
                        <ul className="flex flex-col gap-2 items-center text-[16px] leading-[1.6] sm:text-[18px] md:items-start">
                            {
                                utility.map((util) => {
                                    return (
                                        <li><a href="#" className="text-white-muted">{util}</a></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}