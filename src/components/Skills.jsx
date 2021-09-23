import React from "react";

const  Skills = () => (
    <div className="flex flex-col justify-center m-auto text-lightGray text-4xl sm:text-5xl lg:text-6xl max-w-screen-lg" id="about-me">
        <span className="my-8 lg:my-24 text-center text-6xl">Skills</span>
        <div className="grid grid-cols-2 text-lightWhite text-xl sm:text-4xl lg:text-5xl">
            <div className="text-right pr-4 lg:pr-8 flex flex-col">
                <span className="my-1">Html5</span>
                <span className="my-1">Css</span>
                <span className="my-1">Javascript</span>
                <span className="my-1">PHP</span>
                <span className="my-1">Tailwind/bootstrap</span>
                <span className="my-1">Laravel</span>
            </div>
            <div className="pl-4 lg:pl-8 flex flex-col">
                <span className="my-1"><span className="bi bi-circle-fill mr-1"/><span className="bi bi-circle-fill mr-1"/><span className="bi bi-circle-fill mr-1"/><span className="bi bi-circle-fill mr-1"/><span className="bi bi-circle-half"/></span>
                <span className="my-1"><span className="bi bi-circle-fill mr-1"/><span className="bi bi-circle-fill mr-1"/><span className="bi bi-circle-fill mr-1"/><span className="bi bi-circle-half mr-1"/><span className="bi bi-circle"/></span>
                <span className="my-1"><span className="bi bi-circle-fill mr-1"/><span className="bi bi-circle-fill mr-1"/><span className="bi bi-circle-fill mr-1"/><span className="bi bi-circle mr-1"/><span className="bi bi-circle"/></span>
                <span className="my-1"><span className="bi bi-circle-fill mr-1"/><span className="bi bi-circle-fill mr-1"/><span className="bi bi-circle-fill mr-1"/><span className="bi bi-circle-half mr-1"/><span className="bi bi-circle"/></span>
                <span className="my-1"><span className="bi bi-circle-fill mr-1"/><span className="bi bi-circle-fill mr-1"/><span className="bi bi-circle-fill mr-1"/><span className="bi bi-circle-fill mr-1"/><span className="bi bi-circle-half"/></span>
                <span className="my-1"><span className="bi bi-circle-fill mr-1"/><span className="bi bi-circle-fill mr-1"/><span className="bi bi-circle-fill mr-1"/><span className="bi bi-circle mr-1"/><span className="bi bi-circle"/></span>
            </div>
        </div>
    </div>
)

export default Skills;