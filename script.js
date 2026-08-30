const images = [
    "assets/sliderImage1.png",
    "assets/sliderimage2.png",
    "assets/sliderImage3.jpg",
    "assets/sliderImage4.png",
    "assets/sliderImage5.jpg"
];

let bg1 = document.querySelector("#bg-1");
let bg2 = document.querySelector("#bg-2");

let current = 0;
let showingFirst = true;

setInterval(() => {
    current = (current + 1) % images.length;

    const incoming = showingFirst ? bg2 : bg1;
    const outgoing = showingFirst ? bg1 : bg2;

    // 1. Temporarily disable CSS transition to reset opacity to 0 instantly (without animating down)
    incoming.style.transition = "none";
    incoming.style.opacity = "0";
    incoming.style.backgroundImage = `url('${images[current]}')`;

    // 2. Move incoming layer above outgoing layer (below z-20 overlays)
    incoming.style.zIndex = "2";
    outgoing.style.zIndex = "1";

    // 3. Force DOM reflow so the browser registers the 0 opacity state instantly
    void incoming.offsetWidth;

    // 4. Re-enable CSS transition and fade in to opacity 1
    incoming.style.transition = "opacity 1000ms ease-in-out";
    incoming.style.opacity = "1";

    showingFirst = !showingFirst;
}, 3000);

let toggleMenu = document.querySelector("#hiddenMenu")
let menubar_desktop = document.querySelector("#menubar_desktop")
let menubar_mobile = document.querySelector("#menubar2")
let cross = document.querySelector("#cross")

menubar_desktop.addEventListener("click",()=>{
    toggleMenu.classList.toggle("translate-x-full");
    toggleMenu.classList.toggle("opacity-0");
})
menubar_mobile.addEventListener("click",()=>{
    toggleMenu.classList.toggle("translate-x-full");
    toggleMenu.classList.toggle("opacity-0");
})
cross.addEventListener("click",()=>{
    toggleMenu.classList.toggle("translate-x-full")
    toggleMenu.classList.toggle("opacity-0");
})
