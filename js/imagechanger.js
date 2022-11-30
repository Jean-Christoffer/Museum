let index = 0;



function changeIt(){
    setTimeout(changeIt, 4000)
    let x;
    const img = document.querySelectorAll('.images');
    for( x = 0; x < img.length; x++){
        img[x].style.display = "none"
    }
    index++;
    if(index > img.length){
        index = 1
    }
    img[index -1].style.display = "block"
}
changeIt()