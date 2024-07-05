import logo from 'react';
import {Routes,Route,Link} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Notfound from './Components/Notfound';
function App() {
  return(
    <div>
      <nav>
        <ul>
          <li>
            <Link to="\">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
          <Link to="/Contact">Contact</Link> 
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" elements={<Home />} />
        <Route path="/About" elements={<About />} />
        <Route path="/Contact" elements={<Contact />} />
        <Route path="=" elements={<Notfound />} />
      </Routes>
    </div>
  )
}
export default App; 