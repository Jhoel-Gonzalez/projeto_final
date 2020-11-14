const addButton = document.querySelector("#addButton")
const form = document.querySelector(".form")
const productPicture = document.querySelector("#productPicture")
const addImageButton = document.querySelector("#selectImage")

addButton.addEventListener("click", (event) => {
    event.preventDefault()

    const product = {
        name: form.elements.product.value,
        price: form.elements.price.value.replace(",", "."),
        description: form.elements.description.value,
        picture: productPicture.src,
        quantity: 1
    }

    if (isNaN(form.elements.price.value)) {
        alert("Digite apenas números!")
        form.elements.price.select()
        return false
    } else if (Number(form.elements.product.value)) {
        alert("Digite apenas letras!")
        form.elements.product.select()
        return false
    } else if ((form.elements.price.value === ("") && form.elements.product.value === ("") && form.elements.description.value === (""))) {
        alert("Os campos de entrada estão vazios")
        return false
    } else if (form.elements.description.value === ("")) {
        alert("O campo de entrada esta vazio")
        return false
    }

    const products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : []
    products.push(product)

    localStorage.setItem("products", JSON.stringify(products))
    location.replace(`${location.protocol}//${location.host}/index.html`)
})

addImageButton.addEventListener("click", (evento) => {
    evento.preventDefault()

    const imageSrc = prompt("Digite aqui o endereço da sua imagen")
    if (imageSrc) {
        productPicture.src = imageSrc
    } else {
        alert("O campo de entrada esta vazio")
        return false
    }
})