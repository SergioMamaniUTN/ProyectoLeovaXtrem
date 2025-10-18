export default function Hero() {
  return (
    <section id="inicio" className="fade-in" aria-label="hero-title">
      <header>
        <h1>Indumentaria para trabajo duro</h1>
        <p>Ropa resistente para los entornos más exigentes.</p>
      </header>

      <div>
        <a href="#catalogo" id="ver-catalogo">
          Ver catálogo
        </a>
        <a href="#ofertas" id="ofertas">
          Ofertas
        </a>
      </div>

      <figure>
        <img
          src="/images/GenteTrabajando.png"
          alt="gente-trabajando"
          width="600"
          height="400"
        />
        <figcaption>Equipamiento que te acompaña en la obra</figcaption>
      </figure>
    </section>
  );
}
