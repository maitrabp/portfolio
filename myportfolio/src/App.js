import React from 'react';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Projects from './Projects';
import "bootstrap/dist/css/bootstrap.css";
import FixedNav from './FixedNav';

const styles = {
  fontFamily: "'Quicksand', sans-serif",
  textAlign: 'center',
  fontWeight: "bold"
};

const pages = ['Home', 'About', 'Projects', 'Contact'];

function App() {
  return (
    <div className="App">
       <div style={styles}>
          <FixedNav pages={pages} />
       </div>
        <Home/>
        
        <About/>
        <Projects/>
        <Contact/>
    </div>
  );
}

export default App;
