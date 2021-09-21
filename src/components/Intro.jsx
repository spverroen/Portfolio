import React from "react";

const  Intro = () => (
    <div className="flex flex-col justify-center m-auto text-lightGray text-4xl sm:text-5xl lg:text-6xl  max-w-screen-lg h-full">
        <span className="my-1">Hey! My name is</span>
        <span className="text-lightWhite my-1">Sven Verroen.</span>
        <span className="my-1">I'm a</span>
        <span className="text-lightWhite my-1">full-stack web developer.</span>
        <span className="text-1xl sm:text-2xl lg:text-3xl mt-8"><span className="p-2 border-lightBlue border-2 text-lightBlue"><a href="#about-me">About me</a></span></span>
    </div>
)

export default Intro;