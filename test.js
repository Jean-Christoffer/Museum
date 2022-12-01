
let index = 0;
const img = document.querySelectorAll('.images');
let i;

function changeIt(){
    setTimeout(changeIt, 4000)

    for( i = 0; i < img.length; i++){
        img[i].style.display = "none";  
    }  
    index++;
    if(index > img.length){
        index = 1
    }
    img[index -1].style.display = "block"
 
}
changeIt()