import { useState } from "react";

export default function ProductCard({ product }) {
  if (!product) return null;

  const {
    id,
    baseName,
    name,
    price,
    thumbnail,
    tags = [],
    variants = [],
    sizes = [],
    unavailablesSizes = [],
  } = product;

  const defaultIndex = Math.max(
    0,
    variants.findIndex((v) =>
      name?.toLowerCase().includes(v.colorName.toLowerCase())
    )
  );

  const [selected, setSelected] = useState(defaultIndex);
  const activeVariant = variants[selected];
  const activeImage = activeVariant?.image || thumbnail;
  const activeColorName = activeVariant?.colorName;

  const displayName =
    baseName && activeColorName ? `${baseName} ${activeColorName}` : name;

  const firstAvailableSize =
    sizes.find((s) => !unavailablesSizes.includes(s)) ?? sizes[0];

  const [selectedSize, setSelectedSize] = useState(firstAvailableSize);

  // --- NUEVO: handler para mandar al carrito ---
  const handleAdd = () => {
    const payload = {
      id,
      baseName: baseName || name,
      name: displayName,
      price,
      color: activeColorName || null,
      size: selectedSize || null,
      image: activeImage,
    };
    if (typeof onAddToCart === "function") {
      onAddToCart(payload);
    } else {
      // fallback simple por si todavía no pasaste el prop
      window.alert(
        `Agregado: ${payload.name} - Talle ${payload.size ?? "-"} - Color ${
          payload.color ?? "-"
        }`
      );
      console.log("CARRITO (demo):", payload);
    }
  };

  return (
    <article>
      <figure>
        <img src={activeImage} alt={displayName} width="200" height="200" />
        <figcaption>{displayName}</figcaption>
      </figure>

      {variants.length > 0 && (
        <div
          className="swatches"
          role="radiogroup"
          aria-label={`Colores de ${displayName}`}
        >
          {variants.map((v, i) => (
            <label
              key={`${id}-${v.colorName}`}
              className={`swatch ${i === selected ? "is-selected" : ""}`}
              title={v.colorName}
            >
              <input
                type="radio"
                name={`color-${id}`}
                value={v.colorName}
                checked={i === selected}
                onChange={() => setSelected(i)}
              />
              <span
                aria-hidden="true"
                style={{ backgroundColor: v.colorHex }}
              />
            </label>
          ))}
        </div>
      )}

      {/* Selector de talle */}
      {sizes.length > 0 && (
        <div
          className="sizes"
          role="radiogroup"
          aria-label={`Talles de ${displayName}`}
        >
          {sizes.map((sz) => {
            const disabled = unavailablesSizes.includes(sz);
            const selected = selectedSize === sz && !disabled;

            return (
              <button
                type="button"
                key={`${id}-size-${sz}`}
                className={`size-pill ${selected ? "is-selected" : ""} ${
                  disabled ? "is-disabled" : ""
                }`}
                title={disabled ? `Talle ${sz} (sin stock)` : `Talle ${sz}`}
                onClick={() => !disabled && setSelectedSize(sz)}
                disabled={disabled}
                role="radio"
                aria-checked={selected}
              >
                {sz}
              </button>
            );
          })}
        </div>
      )}

      {tags.length > 0 && (
        <ul>
          {tags.slice(0, 3).map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      )}

      <p>
        <strong>${new Intl.NumberFormat("es-AR").format(price)}</strong>
      </p>

      {/* 🔘 Botón Agregar */}
      <div>
        <button
          type="button"
          onClick={handleAdd}
          disabled={!selectedSize}
          aria-pressed={!!selectedSize}
        >
          Agregar al carrito
        </button>
      </div>
    </article>
  );
}
