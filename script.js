let btn = document.getElementById("btn");
function changeTxt(){
    btn.innerHTML = "Oooops";
    btn.style.color = "blue";
    btn.style.background = "black";
}

document.getElementById("btn").addEventListener("click", changeTxt)