import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './app.css';
import Company from "./components/company/Company";
import Property from "./components/Hero/Property/Property";
import Value from "./components/Value/Value";

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

 
 </div>
  );
}

export default App;
