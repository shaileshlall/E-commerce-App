import './App.css';
import NavBar from './components/Header/NavBar/NavBar';
import Brands from './components/Main/Brands/Brands';
import Section1 from './components/Main/CardContainer/Section1/Section1';
import Section2 from './components/Main/CardContainer/Section2/Section2';
import Catalogue from './components/Main/Catalogue/Catalogue';
import HeroSection from './components/Main/HeroSection/HeroSection';

function App() {
  return (
    <>
    <NavBar/>
    <HeroSection/>
    <Brands/>
    <Section1/>
    <Section2/>
    <Catalogue/>
    </>
  );
}

export default App;
