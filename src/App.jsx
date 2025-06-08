import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Behandling from './Pages/Behandling'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {

  return (
    <Router>
      <div className='min-h-screen flex flex-col'>
        <Navbar />
        <div className='flex-grow p-6'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Behandling' element={<Behandling />}/>
            <Route path='/About' element={<About />}/>
            <Route path='/Contact' element={<Contact />}/>
          </Routes>
        </div>
        <Footer/>
       </div>         
    </Router>
  )
}

export default App
