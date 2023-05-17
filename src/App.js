import React from 'react'

import './components/css/footer.css';
import './components/css/languages.css';
import './components/css/otherProjects.css';
import './components/css/projects.css';
import './components/css/section3.css';
import './components/css/style.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";

import Header from './components/sections/header';
import HomeSection from './components/sections/homeSection';
import About  from './components/sections/about';
import Languages from './components/sections/languages';
import Project from './components/sections/project';
import OtherProjects from './components/sections/otherProject';
import Footer from './components/sections/footer';

export default class App extends React.Component {
    render() {
        return ( 
            <>
                <Header />
                <div className="main">
                    <HomeSection />
                    <About />
                    <Languages />
                    <Project />
                    <OtherProjects />
                </div>
                <Footer />
                {/* <div className="pointer">
                        <div className="centre-dot"></div>
                </div> */}
            </>
        )
    }
}