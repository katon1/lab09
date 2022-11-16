const photos = JSON.parse(content);

/* put your code after this */

const parent = document.querySelector('#parent');

for (let ph of photos) {
    let figure = document.createElement('figure');
    figure.appendChild( create_image(ph) );
   figure.appendChild( create_caption(ph) );

   parent.appendChild(figure);
}

function create_image (image){
    let photo = document.createElement('img');
    photo.setAttribute("src", `images/${image.filename}`);
    photo.setAttribute("alt", `${image.title}`);
   return photo;
}

function create_caption(image) {
    let caption = document.createElement('figcaption');
    caption.appendChild( create_header(image));
    caption.appendChild(  create_paragraph(image) );
    create_color_scheme(caption, image);
   return caption;
}

function create_color_scheme(caption, image) {
    for (let x of image.colors) {
       let span = document.createElement('span');
       span.style.backgroundColor = x.hex;
       caption.appendChild(span);
    } 
 }

 function create_header(image) {
    let h2 = document.createElement('h2');
    let h2Text = document.createTextNode(image.title);
    h2.appendChild(h2Text);
    return h2;
 }
 
 function create_paragraph(image) {
    let p = document.createElement('p');
    let pText = document.createTextNode(image.description);
    p.appendChild(pText);
    return p;
 }


// function file (photos){
//     this.title = title;
//     this.filename = filename;
//     this.description = description;
//     this.colors = colors;
//     this.hex = hex;
// };

// const len = photos.length;

// const arr = [];
// const par = document.querySelector("#parent");
// const fig = document.createElement("figure");
// const hex = [];
// const inf = [];

// for (let x = 0; x < len; x++){
//     arr[x] = document.createElement("img"); 
// }

// for(let i = 0; i < len; i++){
//     const fil = photos[i].filename;
//     const tit = photos[i].title;    
    
//     arr[i].setAttribute("src", "images/" + fil, "alt", tit);
//     inf[i] = information(photos[i]);
//     // console.log(inf[i] + "here");
// };

// for(let l = 0; l < len; l++){
//     fig.appendChild(arr[l]);
//     par.insertAdjacentElement('beforebegin',arr[l]);
    
// }

// const cap = document.createElement("figcaption");

// function information(x){
//     let info = `<h2>` + x.title + `</h2> 
//     <p>` + x.description + `</p>` +
//     hexcode(x.colors) + `</figcaption> 
//     </figure>`;
//     // console.log(info);
// }

// function hexcode(hx){
//     for(let i = 0; i < hx.length; i++){
//         hex[i] = document.createElement("span");
//         // console.log(hx.length);
      
//     }

//     for(let x = 0; x < hx.length; x++){
//         hex[x].setAttribute("style", "background-Color:" + hx[x].hex, "display:inline-block;");
//         hex[x].style.backgroundColor = hx[x].hex;
//         console.log(hex[x].style.backgroundColor = hx[x].hex + "here " + x);
//         // hex[x].setAttribute("style", "display: inline-block;", "background-Color:" + hx[x].hex + ";");

//         console.log(hx[x].hex);
//     } 
// }



