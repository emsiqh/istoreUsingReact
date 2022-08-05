import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { HomeSection } from './components/HomeSection';
import { FeatureSection } from './components/FeatureSection';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomeSection />
      <FeatureSection />
    </div>
  );
}

export default App;
