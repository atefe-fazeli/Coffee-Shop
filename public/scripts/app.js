const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
const submenuToggle = document.querySelector(".submenu--toggle");
const submenu = document.querySelector(".submenu");
const navIcon = document.querySelector(".nav-icon");
const navbar = document.querySelector(".navbar");
const overlay = document.querySelector(".overlay");
const navbarCloseBtn = document.querySelector(".navbar-close-btn");
const cartIcon = document.querySelector(".cart-icon");
const cart = document.querySelector(".cart");
const cartCloseBtn = document.querySelector(".cart-close-btn");



toggleThemeBtns.forEach(btn =>{
    btn.addEventListener("click" , () => {
        if (localStorage.theme === "dark"){
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme" , "dark");
        }
    })
}

    )

submenuToggle.addEventListener("click", (event)=>{
    event.currentTarget.parentElement.classList.toggle("text-orange-300")
    submenu.classList.toggle("submenu--open")
})


navIcon.addEventListener("click",()=>{
    navbar.classList.remove("-right-64")
    navbar.classList.add("navbar--open")
    overlay.classList.add("overlay--visible")
})
navbarCloseBtn.addEventListener("click",()=>{
    navbar.classList.remove("navbar--open")
    navbar.classList.add("-right-64")
    overlay.classList.remove("overlay--visible")
})
overlay.addEventListener("click",()=>{
    navbar.classList.remove("navbar--open")
    cart.classList.remove("cart--open")
    cart.classList.add("-left-64")
    navbar.classList.add("-right-64")
    overlay.classList.remove("overlay--visible")
})

cartIcon.addEventListener("click",()=>{
    cart.classList.remove("-left-64")
    cart.classList.add("cart--open")
    overlay.classList.add("overlay--visible")
})
cartCloseBtn.addEventListener("click",()=>{
    cart.classList.remove("cart--open")
    cart.classList.add("-left-64")
    overlay.classList.remove("overlay--visible")
})