/* add code after this comment */
//Click
document.addEventListener("DOMContentLoaded", function() {
    
    const pics = document.getElementById('thumbBox');

    const img = document.querySelector("img");

    pics.addEventListener('click', function(e) {

        if(e.target.nodeName.toLowerCase() == 'img'){
           
            const chosen = e.target.src;
            
            const replaced = chosen.replace("small", "medium");
            img.src = replaced;

            const fig = document.getElementById("imgManipulated");

            const newEm = e.target.alt;
            const newTit = e.target.title;

            const woaw = document.getElementById("imgManipulated").querySelector("em").textContent = newEm;

            const oh = document.getElementById("imgManipulated").querySelector("span").textContent = newTit;
          
        }

    }); 

});

//image alter
document.addEventListener("DOMContentLoaded", function() {

    const opa = document.querySelector('#sliderOpacity'); 
    const sat = document.querySelector('#sliderSaturation'); 
    const bright = document.querySelector('#sliderBrightness'); 
    const hue = document.querySelector('#sliderHue'); 
    const gray = document.querySelector('#sliderGray'); 
    const blur = document.querySelector('#sliderBlur'); 
    const img = document.querySelector("img");

    let oVal = opa.value;
    let satVal = sat.value;
    let brightVal = bright.value;
    let hueVal = hue.value;
    let grayVal = gray.value;
    let blurVal = blur.value;
    

    //function delegation here 
    document.querySelector("form").addEventListener("input", function(e) {
        let type = e.target.id.substring(6);
        
        if(type == "Opacity"){
            changeOpa(e.target.value);
        } else if (type == "Saturation"){
            changeSat(e.target.value);
        } else if (type == "Brightness"){
            changeBright(e.target.value);
        } else if (type == "Hue"){
            changeHue(e.target.value);
        } else if (type == "Gray"){
            changeGray(e.target.value);
        } else if (type == "Blur"){
            changeBlur(e.target.value);
        } else if (type == "Button"){
            reset(e.target.value);
        } 

   
    
    function changeOpa(e){
       
        img.style.filter = "opacity(" + e/100 + ") saturate(" + satVal/100 + ") brightness(" + brightVal/100 + ") hue-rotate(" + hueVal + "deg) grayscale(" + grayVal + "%) blur(" + blurVal + "px)";
        
        oVal = e;
    }


    function changeSat(e){

        img.style.filter = "opacity(" + oVal/100 + ") saturate(" + e/100 + ") brightness(" + brightVal/100 + ") hue-rotate(" + hueVal + "deg) grayscale(" + grayVal + "%) blur(" + blurVal + "px)";
        

        satVal = e;
    }


    function changeBright(e){
        img.style.filter = "opacity(" + oVal/100 + ") saturate(" + satVal/100 + ") brightness(" + e/100 + ") hue-rotate(" + hueVal + "deg) grayscale(" + grayVal + "%) blur(" + blurVal + "px)";
        

        brightVal = e;
    }


    function changeHue(e){
        img.style.filter = "opacity(" + oVal/100 + ") saturate(" + satVal/100 + ") brightness(" + brightVal/100 + ") hue-rotate(" + e + "deg) grayscale(" + grayVal + "%) blur(" + blurVal + "px)";
       

        hueVal = e;
    }


    function changeGray(e){
        img.style.filter = "opacity(" + oVal/100 + ") saturate(" + satVal/100 + ") brightness(" + brightVal/100 + ") hue-rotate(" + hueVal + "deg) grayscale(" + e + "%) blur(" + blurVal + "px)";
    
        grayVal = e;
    }

    // blur.addEventListener('input', changeBlur);

    function changeBlur(e){
        img.style.filter = "opacity(" + oVal/100 + ") saturate(" + satVal/100 + ") brightness(" + brightVal/100 + ") hue-rotate(" + hueVal + "deg) grayscale(" + grayVal + "%) blur(" + e + "px)";

        blurVal = e;
    }

    const reset = document.getElementById('resetFilters');
    
    reset.addEventListener('click', resets);
    
    function resets(e){
        img.style.filter = "none";
    }

     })
});






