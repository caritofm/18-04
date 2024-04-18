
let n1 = document.getElementById("numero1");
let n2 = document.getElementById("numero2");

let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
let resultado = document.getElementById("resultado");

let n1v = 0;
let n2v = 0;
let res = 0;


let btnSumar = document.getElementById("btnSumar");

btnSumar.addEventListener("click", function(){
    error1.innerHTML = ""
    error2.innerHTML = ""

    if(n1v.value === ""){
        error1.innerHTML = "Debe agregar el primer numero";
        error1.style.color= "red";
        return
    }
})
