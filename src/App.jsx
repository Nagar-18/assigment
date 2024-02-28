


import Deals from './components/Deals'
import Footer from './components/Footer'
import Home from './components/Home'
import Main from './components/Main'
import './App.css'
import Navbar from './components/Navbar'
import SignUp from './components/SignUp'

function App() {
  

  return (
   <div className='shadow' >
   <Navbar/>
   <Home/>
   <Main/>
    <Deals/>
    <SignUp/>
     <Footer/></div>
  )
}

export default App
