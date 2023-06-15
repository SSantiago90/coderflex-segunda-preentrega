const productos = [
  {
    id: 1,
    title: "Remera estampada",
    category: "remeras",
    description: "Remera de algodón con estampado",
    img: "/assets/imgs/shirt.bmp",
    price: 29.99,
    stock: 10,
  },
  {
    id: 2,
    title: "Zapatillas deportivas",
    category: "zapatillas",
    description: "Zapatillas cómodas para actividades deportivas",
    img: "/assets/imgs/shoes.bmp",
    price: 79.99,
    stock: 5,
  },
  {
    id: 3,
    title: "Campera de cuero",
    category: "camperas",
    description: "Campera de cuero sintético",
    img: "/assets/imgs/jacket.bmp",
    price: 109.99,
    stock: 3,
  },
  {
    id: 4,
    title: "Remera básica",
    category: "remeras",
    description: "Remera básica de algodón",
    img: "/assets/imgs/shirt.bmp",
    price: 19.99,
    stock: 15,
  },
  {
    id: 5,
    title: "Zapatillas casuales",
    category: "zapatillas",
    description: "Zapatillas casuales para uso diario",
    img: "/assets/imgs/shoes.bmp",
    price: 49.99,
    stock: 8,
  },
  {
    id: 6,
    title: "Campera impermeable",
    category: "camperas",
    description: "Campera impermeable para días lluviosos",
    img: "/assets/imgs/jacket.bmp",
    price: 89.99,
    stock: 4,
  },
  {
    id: 7,
    title: "Remera manga larga",
    category: "remeras",
    description: "Remera de manga larga para climas fríos",
    img: "/assets/imgs/shirt.bmp",
    price: 24.99,
    stock: 12,
  },
  {
    id: 8,
    title: "Zapatillas de running",
    category: "zapatillas",
    description: "Zapatillas especializadas para correr",
    img: "/assets/imgs/shoes.bmp",
    price: 99.99,
    stock: 6,
  },
  {
    id: 9,
    title: "Campera acolchada",
    category: "camperas",
    description: "Campera acolchada para el invierno",
    img: "/assets/imgs/jacket.bmp",
    price: 129.99,
    stock: 2,
  },
];

function getItems(category) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (category) {
        const requestedCategory = productos.filter(
          (item) => item.category === category
        );
        console.log("--", requestedCategory);
        resolve(requestedCategory);
      } else {
        resolve(productos);
      }
    }, 2000);
  });
}

function getSingleItem(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const requestedItem = productos.find((item) => item.id == id);
      console.log(requestedItem);
      resolve(requestedItem);
    }, 2000);
  });
}

export { getItems, getSingleItem };
