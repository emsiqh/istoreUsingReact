import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { HomeSection } from './components/HomeSection';
import { FeatureSection } from './components/FeatureSection';
import { ProductSection } from './components/ProductSection';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomeSection />
      <FeatureSection />
      <ProductSection />
    </div>
  );
}

export default App;
