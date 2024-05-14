import './styles/output.css';
import './styles/styles.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Navbar from './components/Navbar/Navbar';
import CarouselDef from './components/Carousel/CarouselDef';
import Benefits from './components/Benefits/Benefits';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className=''>
      <Navbar />
      <div className='relative'>
        <CarouselDef/>
        <Benefits/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
