import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import React, { Component } from 'react';

class App extends React.Component {
    render() {
        return (
            <div className="App flex flex-col h-screen bg-darkGray">
                <Header />
                <div className="flex-grow">
                    <div className="flex flex-col justify-center m-auto text-lightGray text-4xl sm:text-5xl lg:text-6xl  max-w-screen-lg h-full">
                        <span>Hello! My name is</span>
                        <span className="text-lightWhite">Sven Verroen.</span>
                        <span>I'm a</span>
                        <span className="text-lightWhite">full-stack web developer.</span>
                        <span className="text-1xl sm:text-2xl lg:text-3xl mt-8"><span className="p-2 border-lightBlue border-2 text-lightBlue"><a href="#about-me">About me</a></span></span>
                    </div>

                    <div className="flex flex-col justify-center m-auto text-lightGray text-4xl lg:text-6xl sm:text-5xl  max-w-screen-lg" id="about-me">
                        <span>About me</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
