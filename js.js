const audio = new Audio("horrorscare.mp3")

const content = document.getElementById("content")
const dot = document.getElementById("take")

const position_dot = setInterval(position,600)

function position(){
    console.log("full")
    var height_content = content.clientHeight
    var width_content = content.clientWidth
    dot.style.left = Math.floor(Math.random()*(width_content-30))+"px"
    dot.style.top =  Math.floor(Math.random()*(height_content-30))+"px"
}

dot.addEventListener("click", ()=>{
    audio.play()
    clearInterval(position_dot)
})