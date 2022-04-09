
var display = document.querySelector('.display__output')
var add = document.querySelector('.add')
var sub = document.querySelector('.sub')
var multi = document.querySelector('.multi')
var div = document.querySelector('.div')
var clearButton = document.querySelector('#clear')

let array = []
var clear = false

document.querySelectorAll('.num__key').forEach(
    element => {element.onclick = () => { 
        var limit = display.value.length 
        if(limit >= 8) return
        
        display.value = display.value !== '0' ? display.value + element.innerText : element.innerText;
       
        }
    }
)


for(const opName of ['add', 'sub', 'multi', 'div', 'total']) {
    document.querySelector(`#${opName}`).onclick = () => callBack(opName)
}


function callBack(opName){

    array.push(display.value)
    display.value = ''

    let operator = opName

    if(operator == 'total'){
        operator = ''
        total(array)
        array = []
    }

    if(array[0] == '') array.shift()

    if(display.value == 'NaN'){
        display.value = 'You broke it'
    }
    
    array.push(operator)
}

function total(array){

    let SecondNumber = parseInt(array.pop())
    let operator = array.pop()
    let FirstNumber = parseInt(array.pop())

    switch(operator){
        case 'add': 
            display.value = FirstNumber + SecondNumber
            break
        case 'sub':
            display.value = FirstNumber - SecondNumber
            break
        case 'multi':
            display.value = FirstNumber * SecondNumber
            break
        case 'div':
            display.value = FirstNumber / SecondNumber
            break
    } 
}

//Clear All (CE)
document.querySelector('#clearAll').onclick = function(){
    display.value = ''
    array = []
}

//Clear (C)
document.querySelector('#clear').onclick = function() {
    clear = true
    if(clear){
        array.forEach(value => {
            if(typeof value === 'string') display.value = array[0]
            
        })
    }

    clear = false
}

//Plus or Minus (+/-)
document.querySelector('#plusOrMinus').onclick = function() {
    console.log(display.value)

    let num = []
    num.push(display.value)
    inverted = num.map(i => - i)
    display.value = inverted
}

