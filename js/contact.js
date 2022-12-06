
const sendButton = document.querySelector('.contact-send')
const closeDialog = document.querySelector('.close-dialog')

const bookingSuccess = document.querySelector('.success-box')

const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const subjectInput = document.querySelector('#subject')
const textInput = document.querySelector('#message')

sendButton.addEventListener('click', openDialog)

closeDialog.addEventListener('click',()=>{
    bookingSuccess.close()
    window.location.reload()
})   

function openDialog() {
    if (
      nameInput.value !== "" &&
      emailInput.value !== "" &&
      subjectInput.value !== "" &&
      textInput.value !== "" 
    ) {
      bookingSuccess.show();
    }
  }
  