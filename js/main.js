//open modal 
document.querySelector('#signin').addEventListener(`click`, (event) => {
    document.getElementById('modal').classList.toggle('open');
} )

//close modal 
document.querySelector('#close').addEventListener(`click`, (event) => {
    document.getElementById('modal').classList.toggle('open');
} )

//Finds *all* HTML elements with class="input.field"
const allFeilds = document.querySelectorAll('input.field'); 

// Will store the found Element references in an array-like structure. 
document.querySelector('#submit').addEventListener(`click`, (event) => {
    allFeilds.forEach(aFeild => {
    aFeild.classList.add('error');
    })
})

// Removes the `.error` class from any individual `<input>` when the cursor gives it `focus`

// document.querySelector('input').addEventListener(`focus`, (event) => {
//     document.getElementById('user').classList.remove('error')
//     document.getElementById('pass').classList.remove('error')
// })

// const allInputs = document.querySelectorAll('.feild')
// .addEventListener(`focus`, (event) => {
    
//     allInputs.forEach(aInput => {
//     aInput.classList.remove('error');
//     })             
// })

document.querySelectorAll(`.feild`).forEach($inpt => {
    $inpt.addEventListener(`click`, evet => {
        classList.remove(`error`)
})

document.querySelectorAll(`.feild`).forEach($inpt => {
    $inpt.addEventListener(`click`, evet => {
        $inpt.classList.remove(`error`)
    })

// .setAttribute(`src`, `img/dice${int}.svg`);

// document.querySelectorAll('input').addEventListener(`focus`, (event) => {
    
//     allInputs.forEach(aInput => {
//     aInput.classList.remove('error');
//     })             
// })