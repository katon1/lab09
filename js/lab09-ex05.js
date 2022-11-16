/* code goes here */

// function simpleHandler(event) { 
//     alert("button was clicked"); 
//    } 
//    const btn = document.getElementById("firstButton");
// btn.addEventListener("click", function () { 
//  alert("a different approach but same result"); 
// }); 

const buttons = document.querySelectorAll(".card button"); 
for (let btn of buttons) {
    btn.addEventListener('click', function (e) {
    let para = e.target.previousElementSibling; 
    alert(para.textContent);
    });
   }

   const images = document.querySelectorAll(".card img"); 
   for (let img of images) { 
    img.addEventListener('mouseover', function (e) { 
    e.target.classList.add('sepia'); 
    }); 
    img.addEventListener('mouseout', function (e) { 
    e.target.classList.remove('sepia'); 
    }); 
   }    


