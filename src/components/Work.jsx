import React from "react";

const  Work = () => (
    <div className="flex flex-col justify-center m-auto text-lightGray text-4xl lg:text-6xl sm:text-5xl max-w-screen-lg" id="work">
        <span className="my-8 lg:my-24 text-center text-6xl">My work</span>
        <div className="flex flex-row flex-wrap gap-16 items-center justify-center m-auto">
            <a><div className="bg-pars lg:bg-lightBlue h-60 w-60 transition duration-300 ease-in-out hover:bg-pars hover:text-lightWhite transform hover:scale-110 flex flex-col justify-center items-center">
                <span className="text-3xl">Pars</span>
                <span className="text-lg">"End 2021"</span>
            </div></a>
            <a href="https://flexzipper.com/" target="_blank"><div className="bg-flexzipper lg:bg-lightBlue h-60 w-60 transition duration-300 ease-in-out hover:bg-flexzipper hover:text-lightWhite transform hover:scale-110 flex flex-col justify-center items-center">
                <span className="text-3xl">Flex-zipper</span>
                <span className="text-lg">"Begin 2021"</span>
            </div></a>
            <a><div className="bg-multiversum lg:bg-lightBlue h-60 w-60 transition duration-300 ease-in-out hover:bg-multiversum hover:text-lightWhite transform hover:scale-110 flex flex-col justify-center items-center">
                <span className="text-3xl">Multiversum</span>
                <span className="text-lg">"End 2020"</span>
            </div></a>
        </div>
        <div className="text-center text-lightWhite flex flex-col text-lg sm:text-xl lg:text-2xl mt-24">
            <span className="my-1 text-lightGray"><span className="text-pars opacity-90">Pars</span> is my main project at school right now, <span className="text-flexzipper opacity-90">Flex-zipper</span> actually got launched and you can visit there website by clicking the box, <span className="text-multiversum opacity-90">Multiversum</span> never got launched. I do still have all the repositories on my <a href="https://github.com/spverroen" target="_blank" className="text-lightBlue underline">github</a>.</span>
        </div>
    </div>
)

export default Work;