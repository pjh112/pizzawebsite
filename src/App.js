import { BrowserRouter as Router, Routes,Route,} from "react-router-dom"
import './App.css';
import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import HomePage from './components/pages/HomePage';
import Menu from './components/pages/Menu';
import About from './components/pages/About';
import Contact from './components/pages/Contact';


function App() {
  return(

   <div className="App">
    <Router>
   <Navbar />
  <Routes>
    <Route path = "/" element= {<HomePage/>} />
    <Route path = "/Menu" element= {<Menu/>} />
    <Route path = "/About" element = {<About/>} />
    <Route path = '/Contact' element = {<Contact/>} />
  </Routes>
  <Footer />
   </Router>
   </div>
  );
  }  
 
export default App;
