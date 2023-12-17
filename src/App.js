import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

// ROUTES
import Footer from './components/header_footer/Footer'
import Header from './components/header_footer/Header'
import Home from './views/Home'
import Wings from './views/Wings'
import SignUp from './components/auth/SignUp'
import Projects from './views/Projects'

function App () {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={ <Home /> }/>
        <Route exact path='/wings' element={ <Wings /> }/>
        <Route exact path='/wings/signup' element={ <SignUp /> } />
        <Route exact path='/projects' element={ <Projects /> } />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
