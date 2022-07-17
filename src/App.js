
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import './App.css';
import Experience from './components/Experience/Experience';
import About from './components/About/About';
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer';
import { themeContext } from './Context';
import { useContext } from 'react';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App"
      style={{
        background: darkMode ? 'black' : '',
        color: darkMode ? 'white' : ''
      }}>
      {/* style for App . If true, the bg will change to black nd all the text color will change to white*/}


      <Navbar />
      <Intro />
      <Experience />
      <About />
      <Project />
      <Contact />
      <Footer />


    </div>
  )
}

export default App
