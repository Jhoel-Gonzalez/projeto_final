const addButton = document.querySelector("#addButton")
const form = document.querySelector(".form")
const productPicture = document.querySelector("#productPicture")

addButton.addEventListener("click", (event) => {
    event.preventDefault()

    const product = {
        name: form.elements.product.value,
        price: form.elements.price.value,
        description: form.elements.description.value,
        picture: productPicture.src
    }

    localStorage.setItem("product", JSON.stringify(product))
    /* location.replace(`${location.protocol}//${location.host/index.html}`) */
})