const headerTag = document.querySelector("header")

const easing = function(x) {
    return x * x * x
}

const fadeHeader = function(){
    const pixels = window.pageYOffset

    headerTag.style.opacity = 1 - easing(pixels / 500)
}

window.addEventListener("scroll", function(){
    fadeHeader()
})
