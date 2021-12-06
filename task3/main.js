let inputNum = document.getElementById("inputNum")
let inputColor = document.getElementById("inputColor")


let cardBody = document.getElementsByClassName("card-body ")
console.log(cardBody)
cardBody.style.color="red"
//burda rengi gorturmur umumiyyetle.Ona gore davaminida yaza bilmedim.
let Btn = document.getElementById("Btn")


Btn.onclick = function(){
    let valueNum = inputNum.value
    let valueColor = inputColor.value
    cardBody.style.color="valueColor"
    cardBody.style.fontSize=valueNum
    
}

