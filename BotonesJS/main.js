'use strict'
 
//Variables declaradas
let title =  document.getElementById("phrase"); 

//Eventos
function underlineButton () {
    if (title.style.textDecoration == "underline") {
        title.style.textDecoration = "none";

    }else {
        title.style.textDecoration = "underline";
    }
}

function backgroundButton () {

    if (title.style.backgroundColor == "red") {
        title.style.backgroundColor = "blue";
        
    }else if (title.style.backgroundColor == "blue"){
        title.style.backgroundColor = "yellow";

    }else if (title.style.backgroundColor == "yellow"){
        title.style.backgroundColor = "white";

    }else {
        title.style.backgroundColor = "red";
    }
}

function textButton() {

    if (title.style.color == "red") {
        title.style.color = "blue";
  
    }else if (title.style.color == "blue"){
        title.style.color = "yellow";
    
    }else if (title.style.color == "yellow"){
        title.style.color = "black";

    }else {
        title.style.color = "red";
    }

}

function sizeButton() {

    if (title.style.fontSize == "large") {
        title.style.fontSize = "x-large";
  
    }else if (title.style.fontSize == "x-large"){
        title.style.fontSize = "xx-large";
    
    }else if (title.style.fontSize == "xx-large"){
        title.style.fontSize = "medium";

    }else {
        title.style.fontSize = "large";
    }
}
