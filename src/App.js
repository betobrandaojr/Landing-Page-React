
import Navbar from './Componnets/Navbar';
import Header from './Componnets/Header';
import AboutSection from './Componnets/AboutSection';
import WhoWeAre from './Componnets/WhoWeAre';
import Profile1 from './Componnets/Profile-1';
import Profile2 from './Componnets/Profile-2';
import Profile3 from './Componnets/Profile-3';
import Profile4 from './Componnets/Profile-4';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <WhoWeAre/>
      <AboutSection/>
      <Profile1/>
      <Profile2/>
      <Profile3/>
      <Profile4/>
    </div>
  );
}

export default App;
