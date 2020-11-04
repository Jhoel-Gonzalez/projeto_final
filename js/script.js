const newProduct = localStorage.getItem("product")
const newItemCart = JSON.parse(newProduct)
const divNewProduct = document.querySelector("#listProduct")

let divNova = document.createElement("div"); 
divNova.innerHTML = 
`<div>
    <img class="product__img"
        src="${newItemCart.picture}"
        alt="exemplo">
    <h2 class="product__title">${newItemCart.name}</h2>
    <p class="product__description">${newItemCart.description}</p>
    <span>$${newItemCart.price}</span>
</div>
<div>
    <input class="product__input" type="number" min="0" name="pieces" placeholder="1 pcs">
</div>`

divNova.classList.add("product__card");
divNewProduct.appendChild(divNova)
