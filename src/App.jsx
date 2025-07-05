import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Behandling from './Pages/Behandling'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Microneedling from './Components/Microneedling';
import BBGlow from './Components/BBGlow';
import LashLift from './Components/Lashlift';
import BrowLift from './Components/Browlift';
import CookieBanner from './Components/CookieBanner';


function App() {

  return (
    <Router>
      <div className='min-h-screen flex flex-col'>
        <Navbar />
        <div className='flex-grow'>
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
          <CookieBanner />
        </div>
         
        <Footer/>
       </div>         
    </Router>
  )
}

export default App
