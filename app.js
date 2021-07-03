const colors = ['#4285F4','#DB4437','#FECA1D','#4285F4','#0F9D58','#DB4437']

let h1 = document.querySelector('#h1')
let span = document.createElement('span')
h1.style.fontSize = '7em'

let title = 'Google'
let splitString = title.split('')

let html = ''

for (let i = 0; i < colors.length; i++) {
    html += `<span style= 'color:${colors[i]}'>${splitString[i]}</span>`
}

h1.innerHTML = html