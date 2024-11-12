// counter funtionality


function count(operator){
    let inputVal = Number(document.querySelector("#inc-dec-vals").value);
    let displayNumber = Number(document.querySelector(".show-number").innerText);
    if(operator === "+"){
        document.querySelector(".show-number").innerText = inputVal + displayNumber;
    }else if(operator === "-"){
        document.querySelector(".show-number").innerText = Math.max(inputVal, displayNumber) - Math.min(inputVal, displayNumber); 
    }else{
        document.querySelector(".show-number").innerText = 0
    }
}


document.getElementById("reset-btn").addEventListener("click", () => {
    count()
})

count()