const products = [
    {
        id: 1,
        title: "Raqueta Prince Beast 100",
        stock: 10,
        photo: "./assets/img/beast.webp",
        price: 25000,
    },
    {
        id: 2,
        title: "Raqueta wilson Blade 98",
        stock: 10,
        photo: "./assets/img/blade.webp",
        price: 22000,
    },
    {
        id: 3,
        title: "Raqueta Head Radical MP",
        stock: 10,
        photo: "./assets/img/radical.webp",
        price: 27000,
    },
    
];

export const getFetch = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
});

const OneProduct = {
    id: 1,
    title: "Raqueta Prince Beast 100",
    stock: 10,
    photo: "./assets/img/beast.webp",
    price: 25000,
    desc: "La Prince Textreme Beast 100 hace honor a su nombre de bestia desde la línea de fondo.",
};

export const getFetchOneProduct = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(OneProduct);
    }, 2000);
});