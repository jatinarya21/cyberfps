import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero_Section from './components/Hero_Section';
import Gameplay_section from './components/Gameplay_section'
import Section_3 from './components/Section_3';
import CryptoStraps from './components/CryptoStraps';
import Team_Section from './components/Team_Section';
import Faq_Accordion from './components/Faq_Accordion'
import Section_7 from './components/Section_7';
import Last_Section from './components/Last_Section';

function App() {
  return (
    <div className="App">
      <Hero_Section />
      <Gameplay_section />
      <Section_3 />
      <CryptoStraps />
      <Team_Section />
      <Faq_Accordion />
      <Section_7 />
      <Last_Section/>
    </div>
  );
}

export default App;
