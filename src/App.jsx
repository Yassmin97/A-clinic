import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from "react";
import Home from './Pages/Home';
import Behandling from './Pages/Behandling'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';
import CookieBanner from './Components/CookieBanner';

const Microneedling = lazy(() => import('./Components/Microneedling'));
const BBGlow = lazy(() => import('./Components/BBGlow'));
const LashLift = lazy(() => import('./Components/Lashlift'));
const BrowLift = lazy(() => import('./Components/Browlift'));


function App() {
  return (
    <Router>
     <ScrollToTop />
      <div className='min-h-screen flex flex-col'>
      <Navbar /> 
      <div className='flex-grow'>
      <Suspense fallback={<div>Laddar sidan...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Behandling' element={<Behandling />}/>
            <Route path='/About' element={<About />}/>
            <Route path='/Contact' element={<Contact />}/>
            <Route path='/Behandling/Microneedling' element ={<Microneedling />} />
            <Route path='/Behandling/BBGlow' element={<BBGlow />} />
            <Route path='/Behandling/Lashlift' element ={<LashLift />} />
            <Route path='/Behandling/Browlift' element ={<BrowLift />} /> 
          </Routes>
      </Suspense>
      <CookieBanner />
      </div>
      <Footer/>  
      </div>     
    </Router>
  )
}

export default App;
