let count = 0

function increment(){
    count += 1
    document.getElementById("plpnum").textContent = count
}

     
function save(){
    let countStr = count + " - "
    document.getElementById("prev").textContent += countStr
    count = 0
    plpnum.textContent = "0" 
}