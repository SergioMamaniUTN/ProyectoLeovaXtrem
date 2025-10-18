// src/components/CartPanel.jsx
import { useEffect } from "react";

export default function CartPanel({
  visible = false,
  items = [],
  onClose,
  onInc,
  onDec,
  onRemove,
  onClear,
}) {
  if (!visible) return null;

  // Cerrar con ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const total = items.reduce((n, x) => n + x.price * x.qty, 0);

  return (
    // Overlay: clic afuera cierra
    <div className="cart-overlay" onClick={onClose}>
      {/* Panel: detener propagación para no cerrar si clickeo adentro */}
      <aside
        className={`cart-panel ${visible ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header con botón cerrar */}
        <header className="cart-header">
          <h3 id="cart-title">Tu carrito</h3>

          <button
            type="button"
            className="cart-close"
            aria-label="Cerrar carrito"
            onClick={(e) => {
              e.stopPropagation();
              console.log("cerrar");
              onClose?.();
            }}
          >
            ×
          </button>
        </header>

        <ul className="cart-list">
          {items.length === 0 && (
            <li className="cart-empty">Aún no agregaste productos.</li>
          )}

          {items.map((it) => (
            <li key={it.key} className="cart-item">
              <div className="cart-line">
                <div>
                  <strong>{it.name}</strong>
                  <div className="cart-variants">
                    {it.color && <span>Color: {it.color}</span>}
                    {it.size && <span>Talle: {it.size}</span>}
                  </div>
                </div>

                <button
                  type="button"
                  className="cart-remove"
                  onClick={() => onRemove?.(it.key)}
                  aria-label={`Quitar ${it.name}`}
                >
                  Quitar
                </button>
              </div>

              <div className="cart-controls">
                <div className="cart-qty">
                  <button
                    type="button"
                    aria-label="Restar unidad"
                    onClick={() => onDec?.(it.key)}
                  >
                    −
                  </button>
                  <span aria-live="polite">{it.qty}</span>
                  <button
                    type="button"
                    aria-label="Sumar unidad"
                    onClick={() => onInc?.(it.key)}
                  >
                    +
                  </button>
                </div>

                <div className="cart-price">
                  ${new Intl.NumberFormat("es-AR").format(it.price * it.qty)}
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Footer del panel */}
        <footer className="cart-footer">
          <div className="cart-total">
            <span>Total</span>
            <strong>${new Intl.NumberFormat("es-AR").format(total)}</strong>
          </div>

          <div className="cart-actions">
            <button
              type="button"
              className="btn-light"
              onClick={() => onClear?.()}
              disabled={items.length === 0}
            >
              Vaciar
            </button>
            <button
              type="button"
              className="btn-primary"
              disabled={items.length === 0}
              onClick={() => alert("Continuar con la compra")}
            >
              Finalizar compra
            </button>
          </div>
        </footer>
      </aside>
    </div>
  );
}
