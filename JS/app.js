
/*
const hello = document.querySelector('.hello');
const hei = document.querySelector('.hei');
const button = document.querySelector('.knapp');
let resetButton;




function sayHello() {

    hei.style.color = 'pink'
    hello.textContent = 'hallo';
    button.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'prøv igjen';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
    button.classList.toggle('hide');

}


button.addEventListener('click', sayHello);

function resetGame () {

    resetButton.parentNode.removeChild(resetButton);
    hello.textContent = ' ';
    button.disabled = false;
    hei.style.color = 'black'
    button.classList.toggle('hide');
}
*/

const firstName = document.querySelector('.firstName')
const surName = document.querySelector('.surName')
const nameSubmit = document.querySelector('.enterName')

const resultatFirstName = document.querySelector('.resultatFirstName')
const resultatSurName = document.querySelector('.resultatSurName')

//const savedName = localStorage.getItem('firstName')
var savedFirstName =[]
console.log(savedName)

function loadPrevious () {
    if (savedName !== undefined){
        console.log('hei')

    }

}

loadPrevious

function results () {

    if(firstName.value !== '') {
        const tableRow = document.createElement('tr')
        const cell1 = document.createElement('td')
        cell1.textContent = firstName.value
        console.log(firstName.value)

        

        const cell2 = document.createElement('td')
        cell2.textContent = surName.value
        tableRow.append(cell1, cell2)
        const tBody = document.querySelector('#hello')
        tBody.append(tableRow)

        //localStorage.setItem('firstName', [firstName.value])

        //var names = [];
        //savedFirstName[0] = prompt("New member name?");
        localStorage.setItem("savedFirstName", JSON.stringify(savedFirstName));

        firstName.value = ''
        firstName.focus()
        surName.value = ''

        

    }
    else {
        alert ('must write name') 

        
    }


}

nameSubmit.addEventListener('click', results)




