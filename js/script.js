const productString = localStorage.getItem("products")
const products = JSON.parse(productString)
const ulNewProduct = document.querySelector("#listProduct")

for (const product of products) {

    let listProduct = document.createElement("li")
    listProduct.innerHTML =
        `<div class="image">
            <img class="product__img"
                src="${product.picture}"
                alt="Imagen do produto">
            <h2 class="product__title">${product.name}</h2>
            <p class="product__description">${product.description}</p>
            <span id="price">R$ ${product.price}</span>
        </div>
        <div>
            <input id="product__input" class="product__input" type="number" min="0" name="pieces" placeholder="1 pcs" value="1">
        </div>`

    listProduct.classList.add("product__card")
    ulNewProduct.appendChild(listProduct)
}

const subPrice = document.querySelector("#subTotal")
const totalPrice = document.querySelector("#total")
const shippingPrice = document.querySelector("#shipping")
const taxesPrice = document.querySelector("#taxes")

let subTotal = 0
let shipping = 0
let taxes = 0
let total = 0

for (product of products) {
    subTotal += Number(product.price)
    
    shipping = Math.floor(Math.random() * 100 + 20)
    taxes =  Math.floor(Math.random() * 30 + 10)
    
    subPrice.textContent = `R$ ${subTotal}`

    if (subTotal >= 200) {
        total = subTotal + taxes
    } else {
        total = subTotal + shipping + taxes
    }

    totalPrice.textContent = `R$ ${total}`
}

if (subTotal >= 200) {
    shippingPrice.textContent = 'FREE'

} else {

    shippingPrice.textContent = `R$ ${shipping}`
}

taxesPrice.textContent = `R$ ${taxes}`