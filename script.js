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

let navLinks = document.querySelector("#nav_links");
let hiddenMenu = document.querySelector("#hiddenMenu");
let menubar_desktop = document.querySelector("#menubar_desktop");
let menubar2 = document.querySelector("#menubar2");
let menubar_mobile = document.querySelector("#menubar_mobile");
let cross = document.querySelector("#cross");
let close_nav_links = document.querySelector("#close_nav_links");

// 1. Mobile main nav button (#menubar2) -> slides #nav_links in from the right
if (menubar2 && navLinks) {
    menubar2.addEventListener("click", () => {
        navLinks.classList.remove("translate-x-full", "opacity-0");
        navLinks.classList.add("translate-x-0", "opacity-100");
    });
}

// 2. Close icon inside #nav_links (#close_nav_links) -> hides #nav_links
if (close_nav_links && navLinks) {
    close_nav_links.addEventListener("click", () => {
        navLinks.classList.add("translate-x-full", "opacity-0");
        navLinks.classList.remove("translate-x-0", "opacity-100");
    });
}

// 3. Mobile menu button inside #nav_links (#menubar_mobile) -> slides #hiddenMenu in from the right
if (menubar_mobile && hiddenMenu) {
    menubar_mobile.addEventListener("click", () => {
        hiddenMenu.classList.remove("translate-x-full", "opacity-0");
        hiddenMenu.classList.add("-translate-x-93", "opacity-100");
    });
}

// 4. Desktop menu button (#menubar_desktop) -> slides #hiddenMenu in from the right
if (menubar_desktop && hiddenMenu) {
    menubar_desktop.addEventListener("click", () => {
        hiddenMenu.classList.remove("translate-x-full", "opacity-0");
        hiddenMenu.classList.add("translate-x-0", "opacity-100");
    });
}

// 5. Close icon inside #hiddenMenu (#cross) -> hides #hiddenMenu
if (cross && hiddenMenu) {
    cross.addEventListener("click", () => {
        hiddenMenu.classList.add("translate-x-full", "opacity-0");
        hiddenMenu.classList.remove("translate-x-0", "opacity-100");
    });
}
