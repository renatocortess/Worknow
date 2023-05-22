import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import Container from './components/layout/Container'
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import NewProject from './components/pages/NewProject'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import Project from './components/pages/Project'
import Crud from './components/pages/Crud'
import Fidelizacao from './components/pages/Fidelizacao'

function App() {
  return (
    <Crud/>,
    <Router>
  
      <Navbar />
      <Container customClass="min-height">
      </Container>
      <Routes>
       
          
          
          <Route  path="/" element={ <Home />}></Route>
          
          <Route path="/projects" element={<Projects />}></Route>
            
          
          <Route path="/company" element={ <Company />}></Route>
           
          
          <Route path="/contact" element={<Contact />}></Route>

          <Route path="/fidelizacao" element={<Fidelizacao/>}></Route>
            
          
          <Route path="/newproject" element={<NewProject />}></Route>
            
         
          <Route path="/project/:id" element={<Project />}></Route>
            
          
        
      </Routes>
    
    </Router>
  )
}

export default App
