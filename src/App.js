import './App.css';
import About from './components/About';
import Divider from './components/Divider';
import Greeting from './components/Greeting';
import Header from './components/Header';
import Participate from './components/Participate';

function App() {
  return (
    <div className='font-[Outfit]'>
      <Header />
      <Greeting />
      <Divider />
      <About />
      <Participate/>
    </div>
  );
}

export default App;
