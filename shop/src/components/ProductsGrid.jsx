import ProductCard from "./ProductCard";
import "../styles/ProductGrid.css";

export default function ProductsGrid({ products, wishlist, toggleWishlist, addToCart }) {
  return (
    <section className="products-section">
      <p className="products-count">Mostrando {products.length} prodotti</p>
      {products.length > 0 ? (
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
              addToCart={() => addToCart(product)}
            />
          ))}
        </div>
      ) : (
        <div className="no-products">Nessun prodotto trovato</div>
      )}
    </section>
  );
}
