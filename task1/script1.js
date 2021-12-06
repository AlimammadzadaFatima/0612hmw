let textInput = document.getElementById("title")

let addBtn = document.getElementById("addBtn")

addBtn.onclick = function(){
    let li = document.createElement("li");
    li.className="listItem";
    li.innerText = textInput.value;

    let textList = document.getElementById("textList");
    textList.appendChild(li);
    console.log(li)
    
    let icon = document.createElement("i")
    icon.className= "fas fa-times"
    icon.style.float="right"
    icon.onclick = function() {
        li.remove()
    }
    li.appendChild(icon)
    textInput.value=""

    li.onclick=function() {
    
   let icon2 = document.createElement("i")
   icon2.className="fas fa-check"
   icon2.style.float="left"
   li.style.textDecoration="line-through"
   li.appendChild(icon2)
   
    }
}
