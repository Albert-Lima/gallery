const containerWorks = document.querySelector(".container_recentWork")
const picOne = document.querySelector(".pic_one")
const picTwo = document.querySelector(".pic_two")
const showWorkBack = document.querySelector(".show_work_back")
const showWorkNext = document.querySelector(".show_work_next")
const buttonBack = document.querySelector(".button_back")
const buttonNext = document.querySelector(".button_next")
const nameDesc = document.querySelector("#nameDesc")
const cityDesc = document.querySelector("#cityDesc")

buttonNext.addEventListener("click", ()=>{
    picOne.style.transition = "0.5s"
    picOne.style.width = "28%"
    picTwo.style.transition = "0.5s"
    picTwo.style.width = "70%"
    showWorkNext.style.opacity = "0"
    showWorkBack.style.opacity = "1"

    nameDesc.innerHTML = "Oliver Smith"
    cityDesc.innerHTML = "Eastbourne"
})

buttonBack.addEventListener("click", ()=>{
    picTwo.style.transition = "0.5s"
    picTwo.style.width = "28%"
    picOne.style.transition = "0.5s"
    picOne.style.width = "70%"
    showWorkNext.style.opacity = "1"
    showWorkBack.style.opacity = "0"

    nameDesc.innerHTML = "Mariana Bitencourt"
    cityDesc.innerHTML = "Pato de Minas"
})