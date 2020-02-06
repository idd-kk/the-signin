//DOM references 
let $modal = document.querySelector(`.modal`)
let $user = document.querySelector(`#user`)
let $pass = document.querySelector(`#pass`)
let $signin = document.querySelector(`.signin`)
let $close = document.querySelector(`.close`)
let $submit = document.querySelector(`.submit`)
let $form = document.querySelector(`#getstarted`)


//Functions 



//Event listeners 
//show modal when 'sign in' is clicked 
$signin.addEventListener(`click`, event => {
    $modal.style.display = `block`
})

//hide modal when 'X' is clicked 
$close.addEventListener(`click`, event => {
    $modal.style.display = `none`
})

// remove error on focus 
$user.addEventListener(`focus`, event => {
    $user.classList.remove(`error`)
})

$pass.addEventListener(`focus`, event => {
    $pass.classList.remove(`error`)
})

//trim and store input feild value 
let userName = $user.value;
let passWord = $pass.value;

//on submit prevent default behaviouse, check is value is "" (if true add .error), if both are not "" then remove modal and signin and add userName to `hello`.
$form.addEventListener(`submit`, event => {
    
    event.preventDefault()

    console.log(userName)
    console.log(passWord)

    if (userName === "") {
        $user.classList.add(`error`) 
    }

    if (passWord === "") {
        $pass.classList.add(`error`) 
    }

    if (userName && passWord !== "") {
        $modal.style.display = `none`
    }
})


// document.getElementById(`hello`).innerHTML = `Hello, ${userName}!`






