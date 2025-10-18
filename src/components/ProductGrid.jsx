import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid({ onAddToCart }) {
  return (
    <section id="catalogo" className="fade-left" aria-label="catalogo-title">
      <h2 id="catalogo-title">Catálogo</h2>

      <div role="list" aria-labelledby="Productos en oferta">
        {products.map((p) => (
          <li key={p.id}>
            <ProductCard product={p} onAddToCart={onAddToCart} />
          </li>
        ))}
      </div>
    </section>
  );
}
