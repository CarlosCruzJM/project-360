import './styles/output.css';
import './styles/styles.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Navbar from './components/Navbar/Navbar';
import CarouselDef from './components/Carousel/CarouselDef';
import Benefits from './components/Benefits/Benefits';
import Footer from './components/Footer/Footer';
import Catalog1 from './components/Catalog/Catalog1';

function App() {
  return (
    <>
      <Navbar />
      <div className='relative'>
        <CarouselDef/>
        <Benefits/>
      </div>
      <Catalog1/>
      <Footer/>
    </>
  );
}

export default App;
