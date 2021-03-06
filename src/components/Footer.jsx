import React from "react";
import {copyFunction} from "../js/copyFunction";

const  Footer = () => (
    <div className="flex flex-row justify-center py-6 px-2 sm:p-6 text-xl bg-lightBlue text-center">
        <div className="flex flex-col mx-4 lg:mx-8">
            <div>
                <a href="https://github.com/spverroen" target="_blank" className="transition duration-300 ease-in-out hover:bg-lightWhite rounded-full p-2 text-3xl"><span className="bi bi-github"></span></a>
            </div>
            <div className="mt-2">
                <span className="text-lightWhite">Github</span>
            </div>
        </div>
        <div className="flex flex-col mx-4 lg:mx-8">
            <div>
                <a className="transition duration-300 ease-in-out hover:bg-lightWhite rounded-full p-2 text-3xl" onClick={copyFunction}><span className="bi bi-envelope-fill"></span></a>
            </div>
            <div className="mt-2">
                <span className="text-lightWhite">Gmail</span>
            </div>
        </div>
        <div className="flex flex-col mx-4 lg:mx-8">
            <div>
                <a href="https://www.linkedin.com/in/sven-verroen-048867199/" target="_blank" className="transition duration-300 ease-in-out hover:bg-lightWhite rounded-full p-2 text-3xl"><span className="bi bi-linkedin"></span></a>
            </div>
            <div className="mt-2">
                <span className="text-lightWhite">LinkedIn</span>
            </div>
        </div>
    </div>
)

export default Footer;
