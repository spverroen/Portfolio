import './App.css';
import Header from './components/Header';
import Aboutme from './components/About-me';
import Intro from './components/Intro';
import Work from "./components/Work";
import Footer from "./components/Footer";
import React, { Component } from 'react';
import Skills from "./components/Skills";

class App extends React.Component {
    render() {
        return (
            <div className="bg-darkGray">
                <div className="App flex flex-col h-screen">
                    <Header />
                    <div className="flex-grow">
                        <Intro />
                    </div>
                </div>
                <Aboutme />
                <Work />
                <Skills />
                <Footer />
            </div>
        );
    }
}

export default App;
