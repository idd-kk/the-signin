//DOM references 
let $modal = document.querySelector(`.modal`)
let $user = document.querySelector(`#user`)
let $pass = document.querySelector(`#pass`)
let $signin = document.querySelector(`.signin`)
let $close = document.querySelector(`.close`)
let $submit = document.querySelector(`.submit`)
let $form = document.querySelector(`#getstarted`)
let $hello = document.querySelector(`#hello`)

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


$form.addEventListener(`submit`, event => {
    
    event.preventDefault();

    if ($user.value.trim() == "") {
        $user.classList.add(`error`) 
    };

    if (user.value.trim() == "") {
        $pass.classList.add(`error`) 
    };

    if ($user.value.trim() && $pass.value.trim() !== "") {
        $modal.style.display = `none`;
        $signin.style.display = `none`;
        $hello.style.display = `block`;
        $hello.classList.add(`smol`);
        $hello.innerHTML = `Hello, ${$user.value}!`;
    };
});








