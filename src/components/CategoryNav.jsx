import { CATEGORIES } from "../data/categories";

export default function CategoryNav() {
  return (
    <nav aria-label="Categorias">
      <ul>
        {CATEGORIES.map((name) => (
          <li key={name}>
            <a href="#catalogo">{name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
