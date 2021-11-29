import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import { ContactUs } from './components/Contact/ContactUs';
import Projects from './components/Projects/Projects';



function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <About></About>
      <Projects></Projects>
      <ContactUs></ContactUs>

    </div>
  );
}

export default App;
