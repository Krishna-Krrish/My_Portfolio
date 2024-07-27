
// x-nav link

let bar=document.getElementById("bar")
let nav=document.getElementById("x-nav")


function show(){
    nav.style.marginTop="-5px"
    nav.style.transition="1.5s"
    bar.innerHTML=`<i class='fa-solid fa-xmark' onclick="hide()"></i>`
}

function hide(){
    nav.style.marginTop="-400px"
    bar.innerHTML=` <i class="fa-solid fa-bars" onclick="show()"></i>`
}

function closeMenu(){
    if(window.innerWidth > 768){
        hide();
    }
}

window.addEventListener("resize",closeMenu)


function closeNav(){
    hide();
}


// navigate link scroll 

function scrollToSection(home) {
    document.getElementById(home).scrollIntoView({
        behavior: 'smooth'
    });
}

function scrollToSection(about) {
    document.getElementById(about).scrollIntoView({
        behavior: 'smooth'
    });
}

function scrollToSection(skills) {
    document.getElementById(skills).scrollIntoView({
        behavior: 'smooth'
    });
}

function scrollToSection(experience) {
    document.getElementById(experience).scrollIntoView({
        behavior: 'smooth'
    });
}

function scrollToSection(contact) {
    document.getElementById(contact).scrollIntoView({
        behavior: 'smooth'
    });
}


// sticky menu 

// window.onscroll = function () {
//     const nav = document.querySelector('.nav');
//     const heroHeight = document.querySelector('.hero').offsetHeight;
//     const Xnav=document.getElementById("x-nav")

//     if (window.pageYOffset > heroHeight) {
//         nav.classList.add('sticky');
//         Xnav.style.top="500px"
//     } else {
//         nav.classList.remove('sticky');
//     }
// };



// links open another window

document.getElementById('email-link').addEventListener('click', function (event) {
    event.preventDefault();
    window.open(this.href, '_blank');
});

document.getElementById('li-link').addEventListener('click', function (event) {
    event.preventDefault();
    window.open(this.href, '_blank');
});

document.getElementById('github-link').addEventListener('click', function (event) {
    event.preventDefault();
    window.open(this.href, '_blank');
});



// container hide

// let containers = document.getElementsByClassName("container");
// let btn = document.getElementById("btn")
// function show() {
//     // Loop through each element in the HTMLCollection
//     for (let i = 0; i < containers.length; i++) {
//         containers[i].style.display = "block";
//         btn.style.display = "none"
//     }
// }
