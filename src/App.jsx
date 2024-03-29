import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './app.css';
import Company from "./components/company/Company";
import Value from "./components/Value/Value";
import Property from "./components/Property/Property";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
 <div className="App">
  <div>
    <div className="gradient"/>
  <Header/>
  <Hero/>
  </div>

  <Company/>
  <Property/>
  <Value/>
  <Contact/>
  
  <Footer/>

 
 </div>
  );
}

export default App;
