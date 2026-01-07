import ProductCard from "./ProductCard";
import "../styles/ProductGrid.css";

export default function ProductsGrid({ products, onProductClick }) {
  return (
    <section className="products-section">
      {products.length > 0 ? (
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onProductClick={() => onProductClick(product)} 
            />
          ))}
        </div>
      ) : (
        <div className="no-products">Nessun prodotto trovato</div>
      )}
    </section>
  );
}