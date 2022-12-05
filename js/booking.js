const totalPrice = document.querySelector('.total-amount')
const select = document.querySelector('#people')
const book = document.querySelector('#booking-submit')

const bookingSuccess = document.querySelector('.booking-success')
const closeDialog = document.querySelector('.close-dialog')

const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const ccInput = document.querySelector('#CC')
const cvcInput = document.querySelector('#CVC')


select.addEventListener('change',(updatePrice)=>{
    totalPrice.innerText = updatePrice.target.value * 70  + ' ,-'
})


book.addEventListener('click', openDialog)

closeDialog.addEventListener('click',()=>{
    bookingSuccess.close()
    window.location.reload()
})    

function openDialog() {
  if (
    nameInput.value !== "" &&
    emailInput.value !== "" &&
    ccInput.value > 0 &&
    cvcInput.value > 0 &&
    select.value !== "--Select number of tickets--" &&
    totalPrice.innerText !== "0 ,-"
  ) {
    bookingSuccess.show();
  }
}
