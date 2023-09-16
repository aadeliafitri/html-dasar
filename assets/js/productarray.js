let products = [
    {
        nama_product: "Red Velvet",
        price: 15000,
    },
    {
        nama_product: "Black Forest Slice",
        price: 13000,
    },
    {
        nama_product: "Chantilly Slice",
        price: 15000,
    },
    {
        nama_product: "Tiramisu Cup",
        price: 17000,
    },
    {
        nama_product: "Rich Chocolate Slice",
        price: 15000,
    },
    {
        nama_product: "Oreo Cup",
        price: 13000,
    },
    {
        nama_product: "Titamisu Slice",
        price: 15000,
    },
    {
        nama_product: "Chantilly Blush Slice",
        price: 17000,
    },
];

// console.log(products);   

// const rows = document.querySelector(".row");

products.forEach(function (product, i) {
    const productContainer = document.querySelector(`.product-${i + 1}`);
    const productTitle = productContainer.querySelector(".title-product");
    const productPrice = productContainer.querySelector(".price");

    productTitle.innerText = product.nama_product;
    productPrice.innerHTML = `<small>Rp${product.price.toLocaleString()},00</small>`;
})