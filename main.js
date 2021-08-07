const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

function addclass(){
    container.classList.add('show-nav')
}

function removeclass(){
    container.classList.remove('show-nav')
}

open.addEventListener('click', addclass)
close.addEventListener('click', removeclass)