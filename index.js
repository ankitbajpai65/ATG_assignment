if (window.innerWidth <= 768) {
    let homeNavMob = document.querySelector('#homeNavMob')
    homeNavMob.classList.remove('removeHomeNavMob')
    homeNavMob.classList.add('displayHomeNavMob')

    document.querySelector('.homeNav').style.display = 'none'

    document.getElementById('homeNavbar').style.display = 'none'

    // document.getElementsByTagName('hr').style.display = 'none';

    document.querySelector('.header').style.display = 'none'
    let mobNav = document.querySelector('#mobNav');
    mobNav.classList.add('displayMobHeader')
    mobNav.classList.remove('.mobHeader')

    let homeBtn = document.querySelector('#homeBtn');
    homeBtn.classList.remove('homeBtnClass')
    homeBtn.classList.add('displayHomeBtn')

    let homeIcon = document.querySelector('#homeIcon');
    homeIcon.classList.remove('removeHomeIcon');
    homeIcon.classList.add('displayHomeIcon')
}

let signupBtn = document.querySelector('.signupBtn');
signupBtn.addEventListener('click', () => {
    console.log('signup click');
    let modal = document.getElementById('signupModal')
    let login = document.getElementById('loginModal')
    if (login.style.display === 'block')
        login.style.display = 'none'
    modal.style.display = 'block'
})
let signupButton = document.querySelector('#signupButton');
signupButton.addEventListener('click', () => {
    console.log('signup click');
    let signup = document.getElementById('signupModal')
    let login = document.getElementById('loginModal')
    signup.style.display = 'block'
    login.style.display = 'none'
})
let loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', () => {
    console.log('login click');
    let signup = document.getElementById('signupModal')
    let login = document.getElementById('loginModal')
    signup.style.display = 'none'
    login.style.display = 'block'
})

let close = document.getElementById('closeModal');
close.addEventListener('click', () => {
    console.log('hello');
    let modal = document.getElementById('signupModal')
    modal.style.display = 'none'
})
let closeLoginModal = document.getElementById('closeLoginModal');
closeLoginModal.addEventListener('click', () => {
    console.log('hello');
    let modal = document.getElementById('loginModal')
    modal.style.display = 'none'
})