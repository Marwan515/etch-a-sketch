const container = document.getElementById("container");

// add div's to make a grid
function addTheDivs(cor){
    container.style.setProperty("--grid-cols", cor);
    container.style.setProperty("--grid-rows", cor);
    let checkel = document.querySelector(".boxes");
    if (checkel != null && checkel != "undefined"){
        removeOld(container);
    }
    for (i = 0; i < (cor * cor); i++){
        let divs = document.createElement("div");
        divs.classList.add("boxes");
        container.appendChild(divs);
        divs.addEventListener("mouseover", function changeColor(){
            divs.style.backgroundColor = "black";
        });
    }
}
// to remove the old values from the container
function removeOld(container){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
}
// to resize
const rebtn = document.getElementById("rbtn");
rebtn.addEventListener("click", function rsize(){
    let usrinp = prompt("Enter The Desired Size Max is 100: ");
    let usrint = parseInt(usrinp);
    if (usrint > 100){
        alert("Can't Give You more Then 100x100");
    } else {
        addTheDivs(usrint);
    }
})
// to reset
const rtbtn = document.getElementById("rtbtn");
rtbtn.addEventListener("click", function resetbtn(){
    addTheDivs(16);
})
// default call
addTheDivs(16);