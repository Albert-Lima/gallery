const containerTestemunhos = document.querySelector(".container_testemunhos")
const boxTestemunhos = document.querySelectorAll(".box_testemunhos")
const buttonLeft = document.querySelector("#buttonTestemunhosLeft")
const buttonRight = document.querySelector("#buttonTestemunhosRight")

buttonRight.addEventListener("click", ()=>{
    boxTestemunhos.forEach((bloco)=>{
        bloco.style.transition = "1s"
        bloco.style.transform = "translateY(-100%)"
    })
})

buttonLeft.addEventListener("click", ()=>{
    boxTestemunhos.forEach((bloco)=>{
        bloco.style.transition = "1s"
        bloco.style.transform = "translateY(0%)"
    })
})