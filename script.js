const form = document.querySelector(".formulario-orçamento")
const mascara = document.querySelector(".mascara-formulario")


function cliquei() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function desaparecer() {
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}

