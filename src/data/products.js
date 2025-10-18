export const products = [
  {
    id: "pantalonc-beige",
    baseName: "Pantalón Cargo",
    name: "Pantalón Cargo Beige",
    price: 33000,
    thumbnail: "/images/pantalones-cargos/pantalonc-beige1.jpg",
    tags: ["gabardina", "resistente", "rígido"],
    variants: [
      {
        colorName: "Beige",
        colorHex: "#C9B79C",
        image: "/images/pantalones-cargos/pantalonc-beige1.jpg",
      },
      {
        colorName: "Verde cemento",
        colorHex: "#6B6F63",
        image: "/images/pantalones-cargos/pantalonc-verde2.jpg",
      },
      {
        colorName: "Negro",
        colorHex: "#111827",
        image: "/images/pantalones-cargos/pantalonc-negro1.jpg",
      },
      {
        colorName: "Gris topo",
        colorHex: "#585f66",
        image: "/images/pantalones-cargos/pantalonc-gris2.jpg",
      },
      {
        colorName: "Verde Militar",
        colorHex: "#3B4B3F",
        image: "/images/pantalones-cargos/pantalonc-vm.jpg",
      },
    ],

    //Talles del 38 al 60 (Disponibles)
    sizes: [36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60],

    //(opcional) talles sin stock, se deshabilitan en la UI
    unavailableSizes: [56, 60],
  },
  /* === PANTALONES CLÁSICOS =====   */
  {
    id: "pantalon-clasico-verde",
    baseName: "Pantalón Clásico",
    name: "Pantalón Clásico Verde Cemento",
    price: 32000,
    thumbnail: "/images/pantalones-clasicos/pantalon-clasico-verde.png",
    tags: ["gabardina", "resistente", "rígido"],
    variants: [
      {
        colorName: "Beige",
        colorHex: "#C9B79C",
        image: "/images/pantalones-clasicos/pantalon-clasico-beige.png",
      },
      {
        colorName: "Verde Cemento",
        colorHex: "#6B6F63",
        image: "/images/pantalones-clasicos/pantalon-clasico-verde.png",
      },
      {
        colorName: "Negro",
        colorHex: "#111827",
        image: "/images/pantalones-clasicos/pantalon-clasico-negro.png",
      },
      {
        colorName: "Gris Topo",
        colorHex: "#585f66",
        image: "/images/pantalones-clasicos/pantalon-clasico-gristopo.png",
      },
      {
        colorName: "Verde Militar",
        colorHex: "#3B4B3F",
        image: "/images/pantalones-clasicos/pantalon-clasico-verdemilitar.png",
      },
    ],

    //Talles del 38 al 60 (Disponibles)
    sizes: [36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60],

    //(opcional) talles sin stock, se deshabilitan en la UI
    unavailableSizes: [56, 60],
  },

  /* === Parkas === */
  {
    id: "parkas-verdemilitar",
    name: "Parkas Verde Militar",
    baseName: "Parka Verde Militar",
    price: 48500,
    thumbnail: "/images/parkas/parkas/verdemilitar",
    tags: ["gabardina", "resistente", "parka"],
    variants: [
      {
        colorName: "Verde Militar",
        colorHex: "#3B4B3F",
        image: "/images/parkas/parka-verdemilitar.png",
      },
      {
        colorName: "Negro",
        colorHex: "#111827",
        image: "/images/parkas/parka-negro.png",
      },
    ],
    //Talles del 38 al 60 (Disponibles)
    sizes: ["S", "M", "L", "XL", "XXL", "6", "7", "8", "9"],

    //(opcional) talles sin stock, se deshabilitan en la UI
    unavailableSizes: [],
  },

  /* === Bermudas Cargos === */
  {
    id: "Bermudas Cargos",
    baseName: "Bermuda Cargo",
    name: "Bermuda Cargo",
    price: 32000,
    thumbnail: "/images/bermudas-cargos/bermudas-cargo",
    tags: ["gabardina", "resistente", "cargo"],
    variants: [
      {
        colorName: "Beige",
        colorHex: "#C9B79C",
        image: "/images/bermudas-cargos/bermudas-cargo-beige.png",
      },
      {
        colorName: "Verde Cemento",
        colorHex: "#6B6F63",
        image: "/images/bermudas-cargos/bermudas-cargo-verdecemento.png",
      },
      {
        colorName: "Negro",
        colorHex: "#111827",
        image: "/images/bermudas-cargos/bermudas-cargo-negro.png",
      },
      {
        colorName: "Gris topo",
        colorHex: "#585f66",
        image: "/images/bermudas-cargos/bermudas-cargo-gristopo.png",
      },
      {
        colorName: "Verde Militar",
        colorHex: "#3B4B3F",
        image: "/images/bermudas-cargos/bermudas-cargo-verdemilitar.png",
      },
    ],

    //Talles del 38 al 60 (Disponibles)
    sizes: [36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60],

    //(opcional) talles sin stock, se deshabilitan en la UI
    unavailableSizes: [56, 60],
  },
  {
    id: "pantalon-reforzado",
    baseName: "Pantalón Reforzado",
    name: "Pantalón Reforzado",
    price: 34000,
    thumbnail: "/images/pantalon-reforzado/pantalon-reforzado-verde.png",
    tags: ["gabardina", "resistente", "reforzado"],
    variants: [
      {
        colorName: "Beige",
        colorHex: "#C9B79C",
        image: "/images/pantalon-reforzado/pantalon-reforzado-beige.png",
      },
      {
        colorName: "Verde cemento",
        colorHex: "#6B6F63",
        image: "/images/pantalon-reforzado/pantalon-reforzado-verde.png",
      },
      {
        colorName: "Negro",
        colorHex: "#111827",
        image: "/images/pantalones-cargos/pantalonc-negro1.jpg",
      },
    ],
    //Talles del 38 al 60 (Disponibles)
    sizes: [36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60],

    //(opcional) talles sin stock, se deshabilitan en la UI
    unavailableSizes: [56, 60],
  },
];
