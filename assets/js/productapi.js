// url https://650ce37147af3fd22f680767.mockapi.io/api/products

//base url
const baseUrl = "https://650ce37147af3fd22f680767.mockapi.io/api";

//endpoint
const productsEndpoint = `${baseUrl}/products`;

function getProducts() {
    //get data products
    fetch(productsEndpoint)
    .then((response) => response.json())
    .then((result) => {
        const productContainer = document.querySelector(".product-container");

        result.forEach((product, i) => {
            const productDiv = document.createElement("div");
            productDiv.setAttribute("class", "product");

            const productImg = document.createElement("img");
            productImg.setAttribute("class", "photo-product");
            productImg.src = `../assets/images/products/products-${i+1}.jpg`;
            productImg.alt = product.nama_product;

            const productTitle = document.createElement("h3");
            productTitle.setAttribute("class", "title-product");
            productTitle.innerText = product.name;

            const productPrice = document.createElement("p");
            productPrice.setAttribute("class", "price");
            productPrice.innerHTML = `<small>Rp${product.price.toLocaleString()},00</small>`;

            const editLink = document.createElement("button");
            editLink.setAttribute("class", "btn-edit");
            editLink.setAttribute("onclick", `openEditProductForm(${product.id})`);
            const iconEdit = document.createElement("i");
            iconEdit.setAttribute("class", "fa fa-edit");
            editIconButton = editLink.appendChild(iconEdit);
            editIconButton.innerText = " Edit";

            const deleteLink = document.createElement("button");
            deleteLink.setAttribute("class", "btn-delete");
            deleteLink.setAttribute("onclick", `deleteProduct(${product.id})`);
            const iconDelete = document.createElement("i");
            iconDelete.setAttribute("class", "fa fa-trash");
            deleteLink.appendChild(iconDelete);

            productDiv.appendChild(productImg);
            productDiv.appendChild(productTitle);
            productDiv.appendChild(productPrice);
            productDiv.appendChild(editLink);
            productDiv.appendChild(deleteLink);

            productContainer.appendChild(productDiv);
        })
    }).catch((err) => {
        console.log(err);
    });
}

// getProducts();

function postProduct(product) {
    fetch(productsEndpoint, {
        method: "POST",
        headers: {'content-type':'application/json'}, //informasi yang akan dikirimkan ke server
        body: JSON.stringify(product)
    })
    .finally(() => {
        alert("Product Added Successfully!");
    })
}

//event saat product disubmit
let formProduct = document.getElementById("popupForm");
formProduct.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const name = document.getElementById("productName").value;
    const price = document.getElementById("productPrice").value;

    const product = {
        name,
        price,
    };
    postProduct(product);
});

function editProduct(product, id) {
    fetch(`${productsEndpoint}/${id}`, {
        method: "PUT",
        headers: {'content-type':'application/json'}, 
        body: JSON.stringify(product)
    })
    .then((response) => {
        if (response.ok) {
            alert("Product updated successfully!");
        } else {
            alert("Product failed to update");
        }
    })
    .catch((err) => {
        console.log(err);
    })
}

function deleteProduct(id) {
    fetch(`${productsEndpoint}/${id}`, {
        method: "DELETE",
        headers: {'content-type':'application/json'}, 
    })
    .then((response) => {
        if (response.ok) {
            alert("Product deleted successfully!");
        } else {
            alert("Product failed to delete");
        }
    })
    .catch((err) => {
        console.log(err);
    })
}

getProducts();

function openAddProductForm() {
    document.getElementById("popupForm").style.display = "block";
}
function openEditProductForm(id) {
    document.getElementById("popupFormEdit").style.display = "block";

    fetch(`${productsEndpoint}/${id}`)
    .then((response) => response.json())
    .then((result) => {
        // console.log(result);
        let nameProduct = document.getElementById("productNameEdit");
        nameProduct.setAttribute("value", `${result.name}`)
        let priceProduct = document.getElementById("productPriceEdit");
        priceProduct.setAttribute("value", `${result.price}`)

        let formEditProduct = document.getElementById("popupFormEdit");
        formEditProduct.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const name = document.getElementById("productNameEdit").value;
        const price = document.getElementById("productPriceEdit").value;

        const product = {
            name,
            price,
        };
        editProduct(product, result.id);
        });
    })
    .catch((err) => {
        console.log(err);
    })
}
function closeAddProductForm() {
    document.getElementById("popupForm").style.display = "none";
}
function closeEditProductForm() {
    document.getElementById("popupFormEdit").style.display = "none";
}

