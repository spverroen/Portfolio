import React from "react";

const  Header = () => (
    <div className="flex flex-row justify-between py-6 px-2 sm:p-6 text-2xl bg-lightBlue">
        <div>
            <span className="text-lightWhite">Sven Verroen</span>
        </div>
        <div>
            <a className="hover:bg-lightWhite rounded-full p-2 mr-2"><span className="bi bi-github"></span></a>
            <a className="hover:bg-lightWhite rounded-full p-2"><span className="bi bi-linkedin"></span></a>
        </div>
    </div>
)

export default Header;
