import React from "react";
import Picture from "../images/sven.jpg";

const  Aboutme = () => (
    <div className="flex flex-col justify-center m-auto text-lightGray text-4xl lg:text-6xl sm:text-5xl max-w-screen-lg" id="about-me">
        <span className="mb-16 text-center">About me</span>
        <div className="flex flex-row justify-between">
            <span className="text-1xl sm:text-2xl lg: text-left w-7/12 m-auto lg:m-0 text-lightWhite">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda distinctio dolores
                impedit sit voluptatibus! Cumque dolore doloremque explicabo illo, ipsa iusto nisi non,
                porro praesentium recusandae sed tempore voluptas? Nemo.

            </span>
            <span className="hidden lg:inline-block"><img src={Picture} className="rounded-full h-72 w-72 border-8 border-lightBlue" alt="picture"/></span>
        </div>
    </div>
)

export default Aboutme;
