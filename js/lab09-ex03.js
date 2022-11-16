/* add code after this comment */

// select the <ul>
const list = document.querySelector("#thumb-list"); 
 
// create list item <li>
const item = document.createElement("li"); 
 
// create <img> element and set its src attribute
const img = document.createElement("img"); 
img.setAttribute("src", "images/8710320515.jpg"); 
 
// nest the <img> in the <li>
item.appendChild(img); 
// add the <li> to the already existing <li> elements
// list.appendChild(item);
list.insertAdjacentElement('afterbegin',img);

// remove the last <li>
document.querySelector("#thumb-list li:last-child").remove();