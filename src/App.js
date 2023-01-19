
import './App.css';
import About from './component/About';
import Home from './component/Home';
import Navbar from './component/Navbar';
import MyProject from './component/MyProject';


function App() {
  return (
    <div className='w-[1536px] h-[4496px] bg-[#1c232d] absolute'>
      <Navbar/>
      <Home/>
      <About/>
      <MyProject/>
    </div>
  );
}

export default App;
