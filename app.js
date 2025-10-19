console.log("javascript connected")

var display = document.getElementById("display");
console.log(display);

function press(userValue) {

    display.value += userValue;

}


function cleardisplay(){
display.value = "";
}

function delchar(){
    display.value = display.value.slice(0, -1);

}

function main(){
    var userText = display.value;
var opretor = "+-*/%.";


if(userText === ""){
    display.value = ""
    alert("Koi value ya operator to add kerdo")
    return
}
else if(opretor.includes(userText[0]) || opretor.includes(userText[userText.length -1])){
    display.value = "No se shro kro or 1 se zyada operator ka istimal nhi kro";
    return
}

var errorFound = false;


for (var i = 0; i < userText.length -1; i++){
    if(opretor.includes(userText[i]) && opretor.includes(userText[i + 1])){
        errorFound = true;
        break
    }
}



if(errorFound){
    display.value = "Error";

}
else{
    display.value = eval(userText)
}


}
