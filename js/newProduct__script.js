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

    const products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : []
    products.push(product)

    localStorage.setItem("products", JSON.stringify(products))
    location.replace(`${location.protocol}//${location.host}/index.html`)
})

window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function show() {
        if (this.files && this.files[0]) {
            let img = document.querySelector('#productPicture');  // $('img')[0]
            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
            img.onload = imageIsLoaded;
        }
    });
  });