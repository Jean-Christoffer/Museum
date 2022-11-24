const img1 = "url('/images/aboutImages/gue.jpg')";
const img2 = "url('/images/aboutImages/testDino.png')";
const img3 = "url('/images/aboutImages/universe.jpg')";
const img4 = "url('/images/aboutImages/kidsvr.jpg')";

const imageArr = [img1, img2, img3, img4]

const imageSection = document.querySelector('.about-explore')

function changeIt(){
    const random = Math.floor(Math.random() *imageArr.length )
    imageSection.style.backgroundImage = imageArr[random]

}

setInterval(changeIt, 4000)

