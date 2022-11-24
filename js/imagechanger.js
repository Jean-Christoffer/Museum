const img1 = "url('/images/aboutImages/ai.jpg')";
const img2 = "url('/images/aboutImages/dino1.jpg')";
const img3 = "url('/images/aboutImages/vr.jpg')";
const img4 = "url('/images/aboutImages/universe.jpg')";
const img5 = "url('/images/aboutImages/teaching.jpg')";

const imageArr = [img1, img2, img3, img4, img5]

const imageSection = document.querySelector('.about-explore')

function changeIt(){
    const random = Math.floor(Math.random() * imageArr.length)
    imageSection.style.backgroundImage = imageArr[random]

}

setInterval(changeIt, 3000)

