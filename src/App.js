import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Footer from './components/shared/Footer/Footer';
import Header from './components/shared/Header/Header';
import Ask from './pages/Ask';
import Home from './pages/Home';

function App() {

  return (

      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ask' element={<Ask />}  />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
