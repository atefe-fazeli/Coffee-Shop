const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
const submenuToggle = document.querySelector(".submenu--toggle");
const submenu = document.querySelector(".submenu");

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
