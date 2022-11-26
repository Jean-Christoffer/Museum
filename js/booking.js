const totalPrice = document.querySelector('.total-amount')
const select = document.querySelector('#people')
const book = document.querySelector('#booking-submit')

const bookingSuccess = document.querySelector('.booking-success')
const closeDialog = document.querySelector('.close-dialog')

const bookingForm = document.querySelector('.booking-form')

select.addEventListener('change',(updatePrice)=>{
    totalPrice.innerText = updatePrice.target.value * 70  + ' ,-'
})


book.addEventListener('click', openDialog)
closeDialog.addEventListener('click', ()=>{
    bookingSuccess.close()
})

function openDialog(){
    for(let i = 0; i < bookingForm.length; i++ ){
        if(bookingForm.input.value !== " " ){
            bookingSuccess.show()
        }
    }

}