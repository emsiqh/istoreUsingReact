import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { HomeSection } from './components/HomeSection';
import { FeatureSection } from './components/FeatureSection';
import { ProductSection } from './components/ProductSection';
import { CategorySection } from './components/CategorySection';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomeSection />
      <FeatureSection />
      <ProductSection />
      <CategorySection />
    </div>
  );
}

export default App;
