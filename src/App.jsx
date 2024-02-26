import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './app.css';
import Company from "./components/company/Company";
import Value from "./components/Value/Value";
import Property from "./components/Property/Property";

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
