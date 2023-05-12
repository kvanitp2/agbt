const links = [...document.querySelectorAll('.nav .nav-link')]

links.map(l => {
    l.addEventListener('click', (e) => {
        e.preventDefault()
        swapLink(l)
    })
})

function swapLink(item) {
    
}
