import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './app.css';
import Company from "./components/company/Company";
import Property from "./components/Hero/Property/Property";

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

 
 </div>
  );
}

export default App;
