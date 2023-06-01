import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import Home from './Home/Home';
import About from './components/About/About';
import Favorite from './components/Favorite/Favorite';
import { Routes, Route } from 'react-router-dom';
import BlankPage from './components/BlankPage/BlankPage';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/favorite' element={<Favorite />}></Route>
          <Route path='*' element={<BlankPage />}></Route>
        </Routes>
      </Container>
    </main>
  );
};

export default App;
