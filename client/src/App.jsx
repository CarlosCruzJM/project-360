import './styles/output.css';
import './styles/styles.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Navbar from './components/Navbar/Navbar';
import CarouselDef from './components/Carousel/CarouselDef';
import Benefits from './components/Benefits/Benefits';
import Footer from './components/Footer/Footer';
import Catalog1 from './components/Catalog/Catalog1';
import Login from './components/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path='/' element={<CarouselDef />} />
          <Route path='/' element={<Catalog1 />} />
          <Route path='/' element={<Benefits />} />
          <Route path='/login' element={<Login itemId={2} />} />
            
          
        </Routes>

        <Footer />

      </BrowserRouter>
    </div>
  )
}

export default App;
