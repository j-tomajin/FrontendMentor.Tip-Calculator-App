const percent = document.querySelector('.bill__tip').querySelectorAll('.bill__label')
const custom = document.querySelector('#custom')

// tip results
const amount = document.querySelector('.amount')
const total = document.querySelector('.total-bill')


// user inputs
const totalBill = document.querySelector('.bill-input')
const people = document.getElementById('numberOfPeople')

totalBill.addEventListener('input', billInputFun)
people.addEventListener('input', numOfPeepsFun)

let totalBillVal = '0.0'
let peopleVal = '1'

amount.innerText = '$' + (0.0).toFixed(2)
total.innerText = '$' + (0.0).toFixed(2)

let tips

percent.forEach(tip => {
    tip.addEventListener('click', activeFun)
})

custom.addEventListener('input', customInput)

function activeFun() {
    percent.forEach(percent => percent.classList.remove('active-label'))

    this.classList.add('active-label')
    let temp = this.innerText.match(/\d/g)
    temp = temp.join('')
    tips = temp / 100

    if(custom.value != '') {
        custom.value = ''
    }
    calculateTip()
}

function customInput() {
    percent.forEach(percent => percent.classList.remove('active-label'))

    tips = custom.value / 100
    calculateTip()
}

function billInputFun() {
    totalBillVal = parseFloat(totalBill.value)
    console.log(totalBillVal)
    calculateTip()
}

function numOfPeepsFun() {
    peopleVal = parseFloat(people.value)
    calculateTip()
}

function calculateTip() {
    if(peopleVal >= 1) {
        let tipAmount = (totalBillVal * tips) / peopleVal
        let totalAmount = (totalBillVal + tips) / peopleVal
        console.log(tipAmount)

        amount.innerText = '$' + tipAmount.toFixed(2)
        total.innerText = '$' + totalAmount.toFixed(2)
    }
}
