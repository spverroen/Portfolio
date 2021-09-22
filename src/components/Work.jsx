import React from "react";

const  Work = () => (
    <div className="flex flex-col justify-center m-auto text-lightGray text-4xl lg:text-6xl sm:text-5xl max-w-screen-lg" id="work">
        <span className="my-8 lg:my-24 text-center text-6xl">My work</span>
        <div className="flex flex-row flex-wrap gap-16 items-center justify-center m-auto">
            <a><div className="bg-lightBlue h-60 w-60 transition duration-300 ease-in-out hover:bg-pars hover:text-lightWhite flex flex-col justify-center items-center">
                <span className="text-3xl">Pars</span>
                <span className="text-lg">"End 2021"</span>
            </div></a>
            <a><div className="bg-lightBlue h-60 w-60 transition duration-300 ease-in-out hover:bg-flexzipper hover:text-lightWhite flex flex-col justify-center items-center">
                <span className="text-3xl">Flex-zipper</span>
                <span className="text-lg">"Begin 2021"</span>
            </div></a>
            <a><div className="bg-lightBlue h-60 w-60 transition duration-300 ease-in-out hover:bg-multiversum hover:text-lightWhite flex flex-col justify-center items-center">
                <span className="text-3xl">Multiversum</span>
                <span className="text-lg">"End 2020"</span>
            </div></a>
        </div>
    </div>
)

export default Work;