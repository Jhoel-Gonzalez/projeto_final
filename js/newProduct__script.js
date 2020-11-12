const addButton = document.querySelector("#addButton")
const form = document.querySelector(".form")
const productPicture = document.querySelector("#productPicture")
const addImageButton = document.querySelector("#selectImage")

addButton.addEventListener("click", (event) => {
    event.preventDefault()

    const product = {
        name: form.elements.product.value,
        price: form.elements.price.value,
        description: form.elements.description.value,
        picture: productPicture.src,
        quantity: 1
    }

    const products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : []
    products.push(product)

    localStorage.setItem("products", JSON.stringify(products))
    location.replace(`${location.protocol}//${location.host}/index.html`)
})

addImageButton.addEventListener("click", (evento) => {
    evento.preventDefault()

    const imageSrc = prompt("Digite aqui o endereço da sua imagen")
    const img = document.querySelector("#productPicture")
    if (imageSrc) {
        img.src = imageSrc
    }
})