
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




box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;