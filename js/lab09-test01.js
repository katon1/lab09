/* add code after this comment */

document.getElementById("thumb-list").style.border = "thin groove #d1d1d1";

document.querySelector("#msg").textContent = document.getElementsByTagName("p")[0].innerText;

const pics = document.querySelectorAll("img[class=thumbs]"); 
for (let pic of pics) { 
 pic.style.boxShadow = "10px 10px 5px #bdbdbd"; 
} 
