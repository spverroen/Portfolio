import React from "react";
import Picture from "../images/sven.jpg";

const  Aboutme = () => (
    <div className="flex flex-col justify-center m-auto text-lightGray text-4xl lg:text-6xl sm:text-5xl max-w-screen-lg" id="about-me">
        <span className="mb-8 lg:mb-24 text-center text-6xl">About me</span>
        <div className="flex flex-row justify-between">
            <span className="text-xl sm:text-2xl w-7/12 m-auto lg:m-0 text-lightWhite">
                <div className="my-4">I'm a 18 year old Utrecht-based student. This my 3rd and final year of this study as a software developer.</div>
                <div className="my-4">In my last 2 years I have learned a lot about web development and I'm really eager to keep on learning new things.</div>
                <div className="my-4">With making websites I put a lot attention in to the details so everything looks perfect.</div>
                <div className="my-4">In my free time I like to play footbal, code and play games. I also enjoy listening to music a lot.</div>
            </span>
            <span className="hidden lg:inline-block"><img src={Picture} className="rounded-full h-72 w-72 border-8 border-lightBlue" alt="picture"/></span>
        </div>
    </div>
)

export default Aboutme;
