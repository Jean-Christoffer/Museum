const img1 = "url('/images/Museum/aboutImages/hm.jpg')";
const img2 = "url('/images/Museum/aboutImages/dino1.jpg')";
const img3 = "url('/images/Museum/aboutImages/vr.jpg')";
const img4 = "url('/images/Museum/aboutImages/universe1.jpg')";
const img5 = "url('/images/Museum/aboutImages/museum.jpg')";
const img6 = "url('/images/Museum/aboutImages/guidedAgain.jpg')";

const imageArr = [ img2, img4]

const imageSection = document.querySelector('.explore')

function changeIt(){
    const random = Math.floor(Math.random() * imageArr.length)
    imageSection.style.backgroundImage = imageArr[random]

}

setInterval(changeIt, 3000)

