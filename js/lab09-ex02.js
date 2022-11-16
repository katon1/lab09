/* add code after this comment */

const msg = document.getElementById("msg"); 
msg.value = "this text is generated by JavaScript"; 

// const legend = document.getElementById("title"); 
// legend.textContent = "Dynamically generated"; 

const legend = document.getElementsByTagName("legend");
legend[0].innerHTML = "Dynamic with <span>HTML</span> added";

const labels = document.getElementsByClassName("input-labels"); 
for (let lab of labels) { 
 lab.style.backgroundColor = "#FFF0F0"; 
} 

document.querySelector("#msg").style.color = "#E4F0F5"; 

const inputs = document.querySelectorAll("input[type=text]"); 
for (let inp of inputs) { 
 inp.style.backgroundColor = "#E4F0F5"; 
} 

// inputs.style.color = "red"; 
const notOkay = document.querySelector("#msg000"); 
alert(notOkay);