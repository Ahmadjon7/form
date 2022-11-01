"use strict";

let email = document.querySelector('#email'),
    password = document.querySelector('#password'),
    btn = document.querySelector('#submit'),
    show = document.querySelector('#show'),
    bodyBtn = document.querySelector('.body-btn'),
    card = document.querySelector('.container');
    
    email.addEventListener('blur', (e) =>{
        if(e.target.value.trim().length === 0) {
            e.target.style.border = '1px solid red'
            e.target.setAttribute('placeholder', "Please enter your email")
        }else{
            e.target.style.border = "1px solid green"
            e.target.setAttribute('placeholder', 'Enter your email address')
        }
        })
        password.addEventListener( 'blur', (e) =>{
            if(e.target.value.trim().length === 0){
                e.target.style.border = '1px solid red';
                e.target.setAttribute('placeholder', "Please enter your password")
            }else{
                e.target.style.border = "1px solid green";
                e.target.setAttribute('placeholder', 'Enter your password')
            }
        })
        password.addEventListener( 'keyup', (e) =>{
            if(e.target.value.trim().length === 0){
                show.setAttribute('class', 'show d-none')
            }else{
                show.setAttribute('class', 'show d-block')
            }
        })
    show.addEventListener( 'click', (e) =>{
    if(password.getAttribute('type') === 'text'){
            password.setAttribute('type','text');
            show.innerHTML = `<i class="bi bi-eye-slash-fill"></i>`
    }else{
        password.setAttribute('type','password');
        show.innerHTML = `<i class="bi bi-eye-fill"></i>`;
    }
}
    )

bodyBtn.addEventListener( 'click', () =>{
    if(card.getAttribute('id') === 'swpie'){
        card.setAttribute('id', "")
    }else{
        card.setAttribute('id', "swpie")
    }
})

email.addEventListener( 'keypress',(e) =>{
    if(e.target.value === 'karimovahmadjon7788@gmail.com'){
        card.setAttribute('id', "swpie")
 }
})