import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom';

// ROUTES
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './views/Home';
import Wings from './views/Wings';
import SignUp from './components/auth/SignUp'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/'  element={ <Home /> }/>
        <Route exact path='/wings' element={ <Wings /> }/>
        <Route exact path='/wings/signup' element={ <SignUp /> } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
