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


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/'  element={ <Home /> }/>
        <Route path='/wings' element={ <Wings /> }/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
