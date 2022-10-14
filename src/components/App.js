import '../index.css';
import NavBar from './NavBar'
import Home from './Home'
import Projects from './Projects'
import About from './About'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='projects' element={<Projects />}/>
        <Route path='about' element={<About /> }/>
      </Routes>
    </div>
  );
}

export default App
