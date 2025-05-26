import { products } from "@/data/products";
import ProductCard from "./ProductCard";

const ProductCatalog = () => {
  return (
    <section
      id="catalog"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-light text-gray-900 mb-4">
          Каталог продукции
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Профессиональные решения для гидравлических и пневматических систем
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductCatalog;
