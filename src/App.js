import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Footer from './components/shared/Footer/Footer';
import Header from './components/shared/Header/Header';
import { UserProvider } from './Context/UserContext';
import Ask from './pages/Ask';
import Home from './pages/Home';

function App() {

  return (

    <Router>
      <UserProvider >
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ask' element={<Ask />} />
        </Routes>
        <Footer />
      </UserProvider>
    </Router>
  );
}

export default App;
