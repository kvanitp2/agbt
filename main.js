const links = [...document.querySelectorAll('.nav .nav-link')]
let autoPlay = true
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
        const index = parseInt(e.target.getAttribute('number'))
        reset(index)
        autoPlay = false
    })
    navigation.append(newCircle)
})

function reset(num) {
    slides.forEach(slide => slide.classList.remove('active'))
    const icons = document.querySelectorAll('.circle')
    icons.forEach(icon => icon.classList.remove('active'))
    slides[num].classList.add('active')
    icons[num].classList.add('active')
}

setInterval(() => {
    if (autoPlay) {
        const currentIndex = document.querySelector('.circle.active')
        let index = parseInt(currentIndex.getAttribute('number')) + 1
        if (index === slides.length) {
            index = 0
        }
        reset(index)
    }
}, 1000)