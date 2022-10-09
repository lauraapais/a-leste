var transitionTime = 1000;

var sliderContainer = document.getElementById("slider_container");
sliderContainer.addEventListener("mouseenter", function (){
    clearInterval(animation);
});
sliderContainer.addEventListener("mouseleave", function (){
    resetSlider();
});


var sliderContent = document.getElementById("slider").children;
var current = 0;
var animationActive = true;

var arrowRight = sliderContainer.querySelector(".arrow.right");
var arrowLeft = sliderContainer.querySelector(".arrow.left");
arrowLeft.addEventListener("click", function () {
    if(animationActive) previousSlide();
});
arrowRight.addEventListener("click", function () {
    if(animationActive) nextSlide();
});

var animation = setInterval(nextSlide, 3000);

function nextSlide() {
    resetSlider();
    if(current>0) {
        if (sliderContent[current - 1].classList.contains("unactive"))
            sliderContent[current - 1].classList.remove("unactive");
    } else {
        if (sliderContent[sliderContent.length - 1].classList.contains("unactive"))
            sliderContent[sliderContent.length - 1].classList.remove("unactive");
    }

    sliderContent[current].classList.remove("active");
    sliderContent[current].classList.add("unactive");
    if(sliderContent[current].classList.contains("anime")) {
        sliderContent[current].classList.remove("anime");
    }

    if(current<sliderContent.length-1)
        current++;
    else
        current=0;

    sliderContent[current].classList.add("active");

    toggleSlider();
    setTimeout(toggleSlider, transitionTime);
}

function previousSlide() {
    resetSlider();
    sliderContent[current].classList.remove("active"); //Atual fica desativado >>>
    sliderContent[current].classList.add("anime");

    if(current>0)
        current--;
    else
        current=sliderContent.length-1;

    sliderContent[current].classList.remove("unactive"); //O que está atras fica ativo e remove o inativo >>>>
    sliderContent[current].classList.add("active");

    if(current>0) {
        sliderContent[current-1].classList.add("unactive");
        if(sliderContent[current-1].classList.contains("anime")) {
            sliderContent[current-1].classList.remove("anime");
        }
    } else {
        sliderContent[sliderContent.length-1].classList.add("unactive");
        if(sliderContent[sliderContent.length-1].classList.contains("anime")) {
            sliderContent[sliderContent.length-1].classList.remove("anime");
        }
    }

    toggleSlider();
    setTimeout(toggleSlider, transitionTime);
}

function toggleSlider() {
    animationActive = !animationActive;
}

function resetSlider() {
    clearInterval(animation);
    animation = setInterval(nextSlide, 3000);
}