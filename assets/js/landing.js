let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n)
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slideshow");
    // console.log(slides.length)
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
}

let subTitle = document.getElementById("subtitle-slide");
subTitle.innerText = "Don't miss it";
subTitle.style.fontSize = "40px"
setTimeout(() => {
    subTitle.innerText = "Just Buy It"
}, 3000);

let titleAbout = document.getElementById("title-about");
titleAbout.style.fontSize = "60px";


function confirmOrder(params) {
    confirm("Anda yakin ingin membeli kue ini?");
}