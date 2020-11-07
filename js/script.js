const productString = localStorage.getItem("products")
const products = JSON.parse(productString)
const ulNewProduct = document.querySelector("#listProduct")

for (const product of products) {

    let listProduct = document.createElement("li")
    listProduct.innerHTML = 
        `<div>
            <img class="product__img"
                src="${product.picture}"
                alt="exemplo">
            <h2 class="product__title">${product.name}</h2>
            <p class="product__description">${product.description}</p>
            <span id="price">R$ ${product.price}</span>
        </div>
        <div>
            <input class="product__input" type="number" min="0" name="pieces" placeholder="1 pcs">
        </div>`

        listProduct.classList.add("product__card")
        ulNewProduct.appendChild(listProduct)
}

