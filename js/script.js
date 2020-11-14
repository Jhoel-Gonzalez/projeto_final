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
            <span id="price" class="price">R$ ${product.price}</span>
        </div>
        <div>
            <input id="product__input" class="product__input" type="number" min="0" name="pieces" placeholder="1 pcs" value="${product.quantity}">
        </div>`

    listProduct.classList.add("product__card")
    ulNewProduct.appendChild(listProduct)
}

let inputs = document.querySelectorAll("input")
for (input of inputs) {
    input.addEventListener("change", function (event) {
        let name = this.parentNode.parentNode.querySelector('.product__title').textContent
        let description = this.parentNode.parentNode.querySelector('.product__description').textContent
        let price = this.parentNode.parentNode.querySelector('.price').textContent
        alterQuantity(name, description, price, this.value)
    });
}

function alterQuantity(name, description, price, quantity) {
    for (product of products) {
        if (product.name === name &&
            product.description === description &&
            "R$ " + product.price === price) {
            product.quantity = quantity
            localStorage.setItem("products", JSON.stringify(products))
            recalculateValues()
            return
        }
    }
}

const subPrice = document.querySelector("#subTotal")
const totalPrice = document.querySelector("#total")
const shippingPrice = document.querySelector("#shipping")
const taxesPrice = document.querySelector("#taxes")

function recalculateValues() {
    let subTotal = 0
    let shipping = 0
    let taxes = 0
    let total = 0

    for (product of products) {
        subTotal += (Number(product.price) * product.quantity)

        shipping = Math.floor(Math.random() * 100 + 20)
        taxes = Math.floor(Math.random() * 30 + 10)

        subPrice.textContent = `R$ ${subTotal.toFixed(2)}`

        if (subTotal >= 200) {
            total = subTotal + taxes
        } else if (subTotal === 0) {
            taxes = 0
            shipping = 0
        } else {
            total = subTotal + shipping + taxes
        }

        totalPrice.textContent = `R$ ${total.toFixed(2)}`
    }

    if (subTotal >= 200) {
        shippingPrice.textContent = 'FREE'

    } else {

        shippingPrice.textContent = `R$ ${shipping}`
    }

    taxesPrice.textContent = `R$ ${taxes}`
}
recalculateValues()