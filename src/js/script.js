const percent = document.querySelectorAll('.bill__label')
const custom = document.querySelector('#custom')

// tip results
const amount = document.querySelector('.amount')
const total = document.querySelector('.total-bill')


// user inputs
const totalBill = document.querySelector('.bill-input')
const people = document.getElementById('numberOfPeople')
const overallBill = document.querySelector('.total-amount')
const error = document.querySelector('.error')

totalBill.addEventListener('input', billInputFun)
people.addEventListener('input', numOfPeepsFun)

totalBill.value = '0.0'
people.value = '1'

amount.innerText = '$' + (0.0).toFixed(2)
total.innerText = '$' + (0.0).toFixed(2)
overallBill.innerText = '$' + (0.0).toFixed(2)

let tipVal = 0.15
let totalBillVal = 0.0
let peopleVal = 1

percent.forEach(function(val) {
    val.addEventListener('click', activeFun)
})

custom.addEventListener('input', customInput)

function activeFun(event) {
    percent.forEach(function(val) {
        val.classList.remove('active-label')
        custom.value = ''

        if(event.target.innerText == val.innerText) {
            val.classList.add('active-label')
            tipVal = parseFloat(val.innerText)/100
        }
    })
    calculateTip()
}

function billInputFun() {
    totalBillVal = parseFloat(totalBill.value)
    calculateTip()
}

function numOfPeepsFun() {
    peopleVal = parseFloat(people.value)

    if(peopleVal == 0) {
        error.classList.add('error-display')
        people.classList.add('error-people')
    } else {
        error.classList.remove('error-display')
        people.classList.remove('error-people')
        calculateTip()
    }
}

function customInput() {
    tipVal = parseFloat(custom.value / 100)
    percent.forEach(function(val) {
        val.classList.remove('active-label')
    })

    calculateTip()
}

function calculateTip() {
    if(peopleVal >= 1) {
        let tipAmount = (totalBillVal * tipVal) / peopleVal
        let totalAmount = (totalBillVal / peopleVal) + tipAmount
        let overall = totalAmount * peopleVal

        amount.innerText = '$' + tipAmount.toFixed(2)
        total.innerText = '$' + totalAmount.toFixed(2)
        overallBill.innerText = '$' + overall.toFixed(2)
    }
}

function reset() {
    totalBill.value = '0.0'
    billInputFun()
    people.value = '1'
    numOfPeepsFun()

    custom.value = ''
}

// attribution
const attribution = document.querySelector('.attribution')

setInterval(() => {
    attribution.classList.add('attrAnim')
}, 5000)

