const menuToggle = document.querySelector(".menu-toggle")
const menu = document.querySelector(".header-menu")

menuToggle.addEventListener("click", () => {
    menu.classList.add("active")
})


document.addEventListener("click", (e) => {
    if(!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
        menu.classList.remove("active")
    }
})