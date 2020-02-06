//*** DOM references ***

let $modal = document.querySelector(`.modal`)
let $user = document.querySelector(`#user`)
let $pass = document.querySelector(`#pass`)
let $signin = document.querySelector(`.signin`)
let $close = document.querySelector(`.close`)
let $submit = document.querySelector(`.submit`)
let $form = document.querySelector(`#getstarted`)
let $hello = document.querySelector(`#hello`)


//*** Event listeners *** 

//show modal when 'sign in' is clicked 
$signin.addEventListener(`click`, event => {
    $modal.style.display = `block`
})

//hide modal when 'X' is clicked 
$close.addEventListener(`click`, event => {
    $modal.style.display = `none`
})

// fetch and store all .field 
let inputFields = document.querySelectorAll(`.field`);

// if any .feild value is "" upon blur add .error class otherwise remove .error 
inputFields.forEach((thing) => {
    thing.addEventListener('blur', (event) => {
        if (thing.value.trim() == "") {
            thing.classList.add(`error`)
        } else {
            thing.classList.remove(`error`)
        }
    });
});

// upon focus remove .error from any .feild 
inputFields.forEach((thing) => {
    thing.addEventListener('focus', (event) => {
        thing.classList.remove(`error`)
    });
});

// upon submit prevent default behaviour, if any .feild is empty add .error, if both are filled then do the thing 
$form.addEventListener(`submit`, event => {
    
    event.preventDefault();

    inputFields.forEach((thing) => {
        if (thing.value.trim() == "") {
            thing.classList.add(`error`) 
        };
    });

    if ($user.value.trim() && $pass.value.trim() !== "") {
        $modal.style.display = `none`;
        $signin.style.display = `none`;
        $hello.style.display = `block`;
        $hello.classList.add(`smol`);
        $hello.innerHTML = `Welcome, ${$user.value}!`;
    };
});

$modal.addEventListener(`click`, event => {
    $modal.style.background = `none`
    $form.style.display = `block`
})






