const totalPrice = document.querySelector('.total-amount')
const select = document.querySelector('#people')




select.addEventListener('change',(updatePrice)=>{
    totalPrice.innerText = updatePrice.target.value * 70  + ' ,-'
})

