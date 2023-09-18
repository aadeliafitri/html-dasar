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

const productRow = document.querySelector(".row");

products.forEach((product, i) => {
    const productDiv = document.createElement("div");
    productDiv.setAttribute("class", "product");

    const productImg = document.createElement("img");
    productImg.setAttribute("class", "photo-product");
    productImg.src = `../assets/images/products/products-${i+1}.jpg`;
    productImg.alt = product.nama_product;

    const productTitle = document.createElement("h3");
    productTitle.setAttribute("class", "title-product");
    productTitle.innerText = product.nama_product;

    const productPrice = document.createElement("p");
    productPrice.setAttribute("class", "price");
    productPrice.innerHTML = `<small>Rp${product.price.toLocaleString()},00</small>`;

    const productLink = document.createElement("a");
    productLink.setAttribute("class", "btn-product");
    productLink.href = "../index.html";
    productLink.innerHTML = "<b>Buy</b>";

    productDiv.appendChild(productImg);
    productDiv.appendChild(productTitle);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(productLink);

    productRow.appendChild(productDiv);
})