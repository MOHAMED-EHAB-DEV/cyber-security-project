import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import ProductDetailsSection from '../components/ProductDetailsSection';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <ProductDetailsSection />
    </div>
  );
}
