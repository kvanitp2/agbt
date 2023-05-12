const links = [...document.querySelectorAll('.nav .nav-link')]

function removeActive() {
    links.forEach(link => link.classList.remove('active'))
}
removeActive()

links.map(l => {
    l.addEventListener('click', (e) => {
        e.preventDefault()
        removeActive()
        swapLink(l)
    })
})

function swapLink(item) {
    item.classList.add('active')
}

const slides = [...document.querySelectorAll('.container .card')]
slides[0].classList.add('active')
const navigation = document.querySelector('.navigation')
slides.forEach((el, i) => {
    const newCircle = document.createElement('div')
    newCircle.classList.add('circle')
    newCircle.setAttribute('number', i)
    i === 0 && newCircle.classList.add('active')
    newCircle.addEventListener('click', (e) => {
        console.log(e.target)
    })
    navigation.append(newCircle)
})