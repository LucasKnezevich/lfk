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


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/'  element={ <Home /> }/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
