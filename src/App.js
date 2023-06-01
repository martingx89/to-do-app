import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import Home from './Home/Home';
import About from './components/About/About';
import Favorite from './components/Favorite/Favorite';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Home />
        <About />
        <Favorite />
      </Container>
    </main>
  );
};

export default App;
