const buttonTop = document.querySelector('#top')

window.addEventListener('scroll', () => {
    if (scrollY > 100) { 
        buttonTop.style.display = 'flex'
        setTimeout(() => {buttonTop.style.animationName = 'none'}, 500)
    }
    else {
        buttonTop.style.display = 'none'
        buttonTop.style.animationName = 'show'
    }

    buttonTop.addEventListener('click', () => {
        document.documentElement.scrollTop = 0
    })
})

