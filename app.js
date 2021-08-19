function getPin(){
    const pin = Math.round(Math.random() * 10000)
    const pinString = pin + ''
    if(pinString.length == 4){
        return pin
    }
    else{
        return getPin()
    }
}

function generatePin(){
    const pin = getPin()
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText
    const calcInput = document.getElementById('typed-numbers')

    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = ''
        }
    }
    else{
        const previousNumber = calcInput.value
        const newNumber = previousNumber + number
        calcInput.value = newNumber
    }
    
})

document.getElementById('submit-btn').addEventListener('click', function(){
    const pin = document.getElementById('display-pin').value
    const typedNumbers = document.getElementById('typed-numbers').value
    const successedDiv = document.getElementById('notify-success')
    const failedDiv = document.getElementById('notify-fail')

    if(pin === typedNumbers){
        failedDiv.style.display = 'none'
        successedDiv.style.display = 'block'
    }else{
        failedDiv.style.display = 'block'
        successedDiv.style.display = 'none'
    }
})