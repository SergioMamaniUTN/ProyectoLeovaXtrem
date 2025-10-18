export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contacto" aria-labelledby="footer-title">
      <h2 id="footer-title" className="sr-only">
        Información del sitio
      </h2>

      {/*Bloque Legal*/}
      <section aria-label="Información legal">
        <small>© {year} Leova Xtrem</small>
        <nav aria-label="Legal">
          <ul>
            <a href="#">Términos</a>
            <a href="#">Privacidad</a>
          </ul>
        </nav>
      </section>

      {/*Contacto */}
      <address>
        <p>Contacto</p>
        <p>
          Instagram:
          <a
            href="https://www.instagram.com/leovaxtrem?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noreferrer "
            aria-label="Instagram de Leova Xtrem"
          >
            @leovaxtrem
          </a>
          <br />
          <a href="mailto:leovaxtrem1@gmail.com">leovaxtrem1@gmail.com</a>
        </p>
      </address>
    </footer>
  );
}
