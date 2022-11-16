/* add code after this comment */

document.addEventListener("DOMContentLoaded", function() { 

    const divs = document.querySelectorAll('.panel');
    for(let div of divs){
        div.addEventListener('click', function(e) {
        console.log(`${e.target.nodeName} was clicked `); 
        e.currentTarget.classList.toggle('open');
        e.currentTarget.classList.toggle('close');
     })
    }

});

