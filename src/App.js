import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Aboutme from './components/About-me';
import Intro from './components/Intro';
import React, { Component } from 'react';
import Picture from './images/sven.jpg';
import Footer from "./components/Footer";

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
                <Footer />
            </div>
        );
    }
}

export default App;
