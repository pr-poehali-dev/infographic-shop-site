import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import ProductCatalog from "@/components/product/ProductCatalog";
import TechnicalSpecs from "@/components/layout/TechnicalSpecs";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProductCatalog />
      <TechnicalSpecs />
      <Footer />
    </div>
  );
};

export default Index;
