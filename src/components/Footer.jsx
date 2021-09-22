import React from "react";
import {copyFunction} from "../js/copyFunction";

const  Footer = () => (
    <div className="flex flex-row justify-center py-6 px-2 sm:p-6 text-xl bg-lightBlue text-center">
        <div className="flex flex-col mx-8">
            <div>
                <a className="hover:bg-lightWhite rounded-full p-2 text-3xl"><span className="bi bi-github"></span></a>
            </div>
            <div className="mt-2">
                <span>Github</span>
            </div>
        </div>
        <div className="flex flex-col mx-8">
            <div>
                <a className="hover:bg-lightWhite rounded-full p-2 text-3xl" onClick={copyFunction}><span className="bi bi-envelope-fill"></span></a>
            </div>
            <div className="mt-2">
                <span>Gmail</span>
            </div>
        </div>
        <div className="flex flex-col mx-8">
            <div>
                <a className="hover:bg-lightWhite rounded-full p-2 text-3xl"><span className="bi bi-linkedin"></span></a>
            </div>
            <div className="mt-2">
                <span>LinkedIn</span>
            </div>
        </div>
    </div>
)

export default Footer;
