export default function Navbar({ cartCount = 0, onOpenCart }) {
  return (
    <header>
      <div>
        <a href="#inicio" aria-label="Leova Xtrem">
          <figure>
            <img src="/images/LogoLeovaXtrem.jpg" alt="leovaxtrem" />
          </figure>
        </a>

        <nav aria-label="Navegación principal">
          <a href="#inicio">Inicio</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#oferta">Ofertas</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <div>
          <button
            type="button"
            aria-label="Ver carrito"
            className="cart-button"
            onClick={onOpenCart}
          >
            🛒
            {cartCount > 0 && (
              <span className="badge" aria-live="polite">
                {cartCount}
              </span>
            )}
          </button>

          <button type="button" aria-label="modo-oscuro">
            ☀️
          </button>
          <button type="button" aria-label="Cambiar Idioma">
            ES ●
          </button>
        </div>
      </div>
    </header>
  );
}
