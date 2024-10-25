import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './Pages/Details';
import Home from './Pages/Home';
import Tesimonials from './Pages/Tesimonials';
import Footer from './Componnet/Footer';

const App = () => {
  return (
    <BrowserRouter>
      {/* Ensures that CallingAllItems is also wrapped */}
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/testimonial' element={<Tesimonials/>}/>
          <Route path='/footer' element={<Footer/>}/>
        </Routes>
        {/* <CallingAllItems /> */}
      </>
    </BrowserRouter>
  );
};

export default App;
