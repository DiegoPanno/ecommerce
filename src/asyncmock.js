

const productos = [
  
  {
    id: "Cerveza Caramel",
    titulo: "Cerveza Caramel",
    imagen: "../img/imgcaramel.jpg",
    idCat: "bebidas",
    stock: 7,
    precio: 500
    
  },
  {
    id: "Cerveza Honey",
    titulo: "Cerveza Honey",
    imagen: "../img/imghoney.jpg",   
    idCat: "bebidas",    
    stock: 4,
    precio: 500
  },
  {
    id: "Cerveza linz",
    titulo: "Cerveza linz",
    imagen: "../img/imglinz.jpg",
    idCat: "bebidas",
    stock: 10,
    precio: 620
  },
  {
    id: "Cerveza Lester",
    titulo: "Cerveza Lester",
    imagen: "../img/imglester.jpg",
    idCat: "bebidas",
    stock: 66,
    precio: 600
  },
  {
    id: "Vino Malbec",
    titulo: "Vino Malbec",
    imagen: "../img/imgvinoananias.jpg",
    idCat: "bebidas",
    stock: 10,
    precio: 1250
  },
  {
    id: 'Alfajor de dulce de leche',
    titulo: 'Alfajor de dulce de leche',
    imagen: '../img/imgcerroazulddl.jpg',
    idCat: 'despensa',
    stock: 5,
    precio: 250
},
{
    id: 'Chips de remolacha',
    titulo: 'Chips de remolacha',
    imagen: '../img/imgremolacha.jpg',
    idCat: 'despensa',
    stock: 9,
    precio: 310
},
{
    id: 'Chip de Zanahoria',
    titulo: 'Chip de Zanahoria',
    imagen: '../img/imgzanahoria.jpg',
    idCat: 'despensa',
    stock: 12,
    precio: 310
},
{
    id: 'Harina de arroz Abucel',
    titulo: 'Harina de arroz Abucel',
    imagen: '../img/imgabucel.jpg',
    idCat: 'despensa',
    stock: 10,
    precio: 880
},
{
    id: 'Aceite de coco neutro',
    titulo: 'Aceite de coco neutro',
    imagen: '../img/imgaceitecoco.jpg',
    idCat: 'despensa',
    stock: 34,
    precio: 1350
},
{
  id: 'Leche de coco',
  titulo: 'Leche de coco',
  imagen: '../img/imglechedecoco.jpg',
  idCat: 'heladera',
  stock: 2,
  precio: 660
},
{
  id: 'Leche Amande',
  titulo: 'Leche Amande',
  imagen: '../img/imgamadde.jpg',
  idCat: 'heladera',
  stock: 6,
  precio: 700

},
{
  id: 'Leche de mani con chocolate',
  titulo: 'Leche de mani con chocolate',
  imagen: '../img/imglechemanichoco.jpg',
  idCat: 'heladera',
  stock: 5,
  precio: 588
},
{
  id: 'Leche de mani',
  titulo: 'Leche de mani',
  imagen: '../img/imglechemani.jpg',
  idCat: 'heladera',
  stock: 19,
  precio: 580
},
{
  id: 'Leche Clásica',
  titulo: 'Leche Clásica',
  imagen: '../img/imglechecomun.jpg',
  idCat: 'heladera',
  stock: 10,
  precio: 249
}
];

export const getProductos = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};



export const getIntem = (id) => {
  return new Promise (resolve => {
    setTimeout ( () => {
      const producto = productos.find(prod => prod.id === id);
      resolve(producto);
    }, 2000)
  })
}

export const getProductosPorCategoria = (idCatergoria) => {
  return new Promise (resolve => {
    setTimeout(() => {
      const productosCategoria = productos.filter(prod => prod.idCat === idCatergoria);
        resolve(productosCategoria);
    }, 2000)
  })
}  