const Navi = ()=>{
    const burger = document.querySelector(".nav-bar .burger")
    const navItems = document.querySelector(".nav-bar .nav-items")
    burger.addEventListener("click",()=>{
        navItems.classList.toggle("active")
    })

}
Navi()