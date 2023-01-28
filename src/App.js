
import './App.css';
import About from './component/About';
import Home from './component/Home';
import Navbar from './component/Navbar';
import MyProject from './component/MyProject';
import Testimonial from './component/Testimonial';
import Contact from './component/Contact';
import Social from './component/Social';



function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <MyProject/>
      <Testimonial/>
      <Contact/>
      <Social/>
    </div>
  );
}

export default App;
