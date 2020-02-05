//Store all dom references 
let $modal = document.querySelector(`.modal`)
let $user = document.querySelector(`#user`)
let $pass = document.querySelector(`#pass`)
let $signin = document.querySelector(`.signin`)
let $close = document.querySelector(`.close`)
let $submit = document.querySelector(`.submit`)
let $form = document.querySelector(`.getstarted`)
let userName = document.getElementById("user")

//Event listeners 
$signin.addEventListener(`click`, event => {
    $modal.style.display = `block`
})

$close.addEventListener(`click`, event => {
    $modal.style.display = `none`
})

// $submit.addEventListener(`click`, event => {
//     $user.classList.add(`error`)
//     $pass.classList.add(`error`)
// })

$user.addEventListener(`focus`, event => {
    $user.classList.remove(`error`)
})

$pass.addEventListener(`focus`, event => {
    $pass.classList.remove(`error`)
})

//capture form submit
$form.addEventListener(`submit`, event => {
    event.preventDefault()
    $user.classList.add(`error`)
    $pass.classList.add(`error`)
})

// document.getElementById(`hello`).innerHTML = `Hello, ${userName}!`
 
  
