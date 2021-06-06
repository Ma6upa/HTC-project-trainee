document.getElementById("nav__films").addEventListener('click', function(){
    document.getElementById("nav__channels").classList.remove('nav__item-active')
    document.getElementById("nav__films").classList.add('nav__item-active')
    document.getElementById("nav__channels").classList.add('nav__item')
    document.querySelector(".films").hidden=false
    document.querySelector(".channels").hidden=true
})
document.getElementById("nav__channels").addEventListener('click', function(){
    document.getElementById("nav__channels").classList.add('nav__item-active')
    document.getElementById("nav__films").classList.remove('nav__item-active')
    document.getElementById("nav__films").classList.add('nav__item')
    document.querySelector(".channels").hidden=false
    document.querySelector(".films").hidden=true
})
document.querySelector(".header__authorization-button").addEventListener('click', function(){
    document.querySelector(".opacity").hidden = false
    document.querySelector(".modal").style.visibility="visible"
})
document.querySelector(".modal").addEventListener('submit', function () {
    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;
    if ( login != '' && password != '') {
        if (document.querySelector('.modal__checkbox').checked == true) {
            localStorage.setItem('user', JSON.stringify({name: login}))
        }
        else{
            sessionStorage.setItem('user', JSON.stringify({name: login}))
        }
    }
    else {
        alert('Введите логин и пароль');
    }
})
document.querySelector('.opacity').addEventListener('click', function(){
    document.querySelector(".opacity").hidden = true
    document.querySelector(".modal").style.visibility="hidden"
})
window.onload = function() {
    if (localStorage.getItem('user') != undefined){
        const authorizedBlock = document.createElement('div')
        authorizedBlock.classList.add('header__authorized')
        const authorizationBlock = document.getElementsByClassName('header__authorization')[0]
        document.querySelector('header').removeChild(authorizationBlock)
        document.querySelector('header').appendChild(authorizedBlock)
        const name = document.createElement('div')
        name.classList.add('header__authorized-name')
        name.innerHTML = JSON.parse(localStorage.getItem('user')).name
        document.querySelector('.header__authorized').appendChild(name)
        let outButton = document.createElement('input')
        outButton.setAttribute('type', 'button')
        outButton.setAttribute('value', 'Выйти')
        outButton.setAttribute('onclick', 'out()')
        outButton.classList.add('header__search-button')
        document.querySelector('.header__authorized').appendChild(outButton)
    }else if (sessionStorage.getItem('user') != undefined)
    {
        const authorizedBlock = document.createElement('div')
        authorizedBlock.classList.add('header__authorized')
        const authorizationBlock = document.getElementsByClassName('header__authorization')[0]
        document.querySelector('header').removeChild(authorizationBlock)
        document.querySelector('header').appendChild(authorizedBlock)
        const name = document.createElement('div')
        name.classList.add('header__authorized-name')
        name.innerHTML = JSON.parse(sessionStorage.getItem('user')).name
        document.querySelector('.header__authorized').appendChild(name)
        let outButton = document.createElement('input')
        outButton.setAttribute('type', 'button')
        outButton.setAttribute('value', 'Выйти')
        outButton.setAttribute('onclick', 'out()')
        outButton.classList.add('header__search-button')
        document.querySelector('.header__authorized').appendChild(outButton)
    }
}
function out () {
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
    location.reload();
}
document.querySelector('.films__news-item-img3').addEventListener('mouseover', function(){
    document.querySelector('.films__news-item-img3-active').hidden = false;
})
document.querySelector('.films__news-item-img3').addEventListener('mouseout', function(){
    document.querySelector('.films__news-item-img3-active').hidden = true;
})
