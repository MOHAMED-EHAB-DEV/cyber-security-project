import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import ProductDetailsSection from '../components/ProductDetailsSection';

export default function Index() {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <FeaturesSection />
            <ProductDetailsSection />
        </div>
    );
}
