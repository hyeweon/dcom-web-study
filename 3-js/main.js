let btn = document.getElementById("button");
btn.addEventListener("click", changeText);

function changeText(){
    document.getElementById("text").innerHTML = "Nice to meet you!";
};