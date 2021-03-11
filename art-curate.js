const headerTag = document.querySelector("header")
const blobGroups = document.querySelectorAll("g.blob")
const sectionTags = document.querySelectorAll("section")
const arrowTag = document.querySelector("arrow")


const easing = function(x) {
    return x * x * x
}

const fadeHeader = function(){
    const pixels = window.pageYOffset

    headerTag.style.opacity = 1 - easing(pixels / 400)
}

const fadeArrow = function(){
    const pixels = window.pageYOffset
    arrowTag.style.opacity = 1 - easing (pixels / 400)
}

const checkBlobs = function() {

    const pixels = window.pageYOffset

    blobGroups.forEach((blob , index) => {
        const currentSection = sectionTags[index]

        if(pixels > currentSection.offsetTop - 300){
            blob.classList.add("in-view")
        } else {
            blob.classList.remove("in-view")
        }
    })
}

window.addEventListener("scroll", function(){
    fadeHeader()
   
    checkBlobs()
})


