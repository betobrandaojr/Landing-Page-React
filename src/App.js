
import Navbar from './Componnets/Navbar';
import Header from './Componnets/Header';
import AboutSection from './Componnets/AboutSection';
import WhoWeAre from './Componnets/WhoWeAre';
import Team from './Componnets/Team';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <WhoWeAre/>
      <AboutSection/>
      <Team/>
    </div>
  );
}

export default App;
