let change = document.querySelector(".one")
let button = document.querySelector(".button")


button.addEventListener("click", function() {
    
    if(change.className == "one two"){
        change.className = "one"
    }else{
        change.className = "one two"
    }


})