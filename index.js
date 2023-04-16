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

let signupBtn = document.getElementById('signupBtn');
signupBtn.addEventListener('click', () => {
    console.log('hello');
    let modal = document.getElementById('myModal')
    modal.style.display = 'block'
})

let close = document.getElementById('closeModal');
close.addEventListener('click', () => {
    console.log('hello');
    let modal = document.getElementById('myModal')
    modal.style.display = 'none'
})