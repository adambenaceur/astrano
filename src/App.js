import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { browserHistory } from 'react-router'

function App() {
  return (
    <Router history={browserHistory}>
      <Header/>
          <Routes>       
              <Route  path="/"  element={<Home/>} />
              <Route  path="/contact" element={<Contact/>} />
              <Route  path="/about" element={<About/>} />
              <Route  path="/donate" element={<Donate/>} />
          </Routes>
      <Footer/>  

    </Router>
  );
}

export default App;
