import '../index.css';
import NavBar from './NavBar'
import Home from './Home'
import Projects from './Projects'
import About from './About'
import BlogFeed from './BlogFeed'
import Resume from './Resume'
import Contact from './Contact'
import Footer from './Footer'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/resume' element={<Resume /> }/>
        <Route path='/about' element={<About /> }/>
        <Route path='/blog' element={<BlogFeed /> }/>
        <Route path='/contact' element={<Contact /> }/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App
