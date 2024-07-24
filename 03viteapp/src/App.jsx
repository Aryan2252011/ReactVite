import './App.css'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import { Route,Routes } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {


  return (
    <>
      {/* <h1 className='bg-green-500 '>Third React App</h1> */}
      <Header/>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path ='/about' Component={About} />
        <Route path='/contact' Component={Contact} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
