//btt About nav
const AboutButton = document.querySelector("#nav_about")
const sectionAbout = document.querySelector(".section_valores")
AboutButton.addEventListener("click", ()=>{
    let elementoRect = sectionAbout.getBoundingClientRect()
    let centerY = elementoRect.top - 80
    window.scrollTo({
        top: centerY + window.scrollY,
        behavior: 'smooth'
    })
})

//btt services nav
const ServiceButton = document.querySelector("#nav_service")
const sectionService = document.querySelector(".section_servicos")
ServiceButton.addEventListener("click", ()=>{
    let elementoRect2 = sectionService.getBoundingClientRect()
    let centerY = elementoRect2.top - 80
    window.scrollTo({
        top: centerY + window.scrollY,
        behavior: 'smooth'
    })
})

//btt products nav
const ProductsButton = document.querySelector("#nav_products")
const sectionProducts = document.querySelector('.section_works')
ProductsButton.addEventListener("click", ()=>{
    let elementoRect3 = sectionProducts.getBoundingClientRect()
    let centerY = elementoRect3.top - 80
    window.scrollTo({
        top: centerY + window.scrollY,
        behavior: 'smooth'
    })
})