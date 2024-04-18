import { sumar } from "./operaciones.js";
let n1 = document.getElementById("numero1");
let n2 = document.getElementById("numero2");

let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
let resultado = document.getElementById("resultado");


let btnSumar = document.getElementById("btnSumar");

btnSumar.addEventListener("click", function(){
    error1.innerHTML = ""
    error2.innerHTML = ""
    resultado.innerHTML = "";

    if(n1.value === ""){
        error1.innerHTML = "Debe agregar el primer numero";
        error1.style.color= "red";
        return
    }
    if(n2.value === ""){
        error2.innerHTML = "Debe agregar el segundo numero";
        error2.style.color= "red";
        return
    }
    resultado.innerHTML = sumar(n1,n2);
    
})
