import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './views/Home';


function App() {
  return (
    <div className='app'>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
