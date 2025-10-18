import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategoryNav from "./components/CategoryNav";
import ProductGrid from "./components/ProductGrid";
import Newletter from "./components/Newletter";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import CartPanel from "./components/CartPanel";

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item) => {
    // clave por variante (id + color + talle)
    const key = `${item.id}__${item.color || "nc"}__${item.size || "ns"}`;

    setCart((prev) => {
      const idx = prev.findIndex((x) => x.key === key);
      if (idx !== -1) {
        // si ya existe, sumamos cantidad
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + 1 };
        return next;
      }
      // si no existe, lo agregamos
      return [...prev, { ...item, key, qty: 1 }];
    });

    window.alert(
      `Agregado al carrito: ${item.name} - Talle ${item.size ?? "-"} - Color ${
        item.color ?? "-"
      }`
    );
    console.log("CARRITO:", cart);
    setIsCartOpen(true);
  };

  // ⬇️ Estas cuatro funciones te faltaban
  const incItem = (key) =>
    setCart((prev) =>
      prev.map((x) => (x.key === key ? { ...x, qty: x.qty + 1 } : x))
    );

  const decItem = (key) =>
    setCart((prev) =>
      prev
        .map((x) => (x.key === key ? { ...x, qty: Math.max(0, x.qty - 1) } : x))
        .filter((x) => x.qty > 0)
    );

  const removeItem = (key) =>
    setCart((prev) => prev.filter((x) => x.key !== key));

  const clearCart = () => setCart([]);

  // (Opcional) ver cambios en consola
  useEffect(() => {
    // console.log("CARRITO:", cart);
  }, [cart]);

  const cartCount = cart.reduce((n, x) => n + x.qty, 0);

  // Cargar carrito guardado al iniciar
  useEffect(() => {
    try {
      const saved = localStorage.getItem("cart");
      if (saved) setCart(JSON.parse(saved));
    } catch {}
  }, []);

  // Guardar carrito ante cada cambio
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch {}
  }, [cart]);

  return (
    <>
      <Navbar
        cartCount={cart.reduce((n, x) => n + x.qty, 0)}
        onOpenCart={() => setIsCartOpen(true)}
      />
      <main>
        <Hero />
        <CategoryNav />
        <ProductGrid onAddToCart={handleAddToCart} />
        <Newletter />
        <Benefits />
      </main>
      <Footer />

      <CartPanel
        visible={isCartOpen}
        items={cart}
        onClose={() => setIsCartOpen(false)}
        onInc={incItem}
        onDec={decItem}
        onRemove={removeItem}
        onClear={clearCart}
      />
    </>
  );
}
