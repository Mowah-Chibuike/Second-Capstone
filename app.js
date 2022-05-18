const hamburger = document.querySelector('nav #icon');
const mobile_menu = document.querySelector('nav ul');
const header = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('show');
    mobile_menu.classList.toggle('show');
});

const password = document.getElementById('password');
const toggle = document.getElementById('toggle');
function showHide(){
    if (password.type === 'password'){
        password.setAttribute('type', 'text');
        toggle.classList.add('hide')
    }
    else{
        password.setAttribute('type', 'password');
        toggle.classList.remove('hide')
    }
}
