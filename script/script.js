// api fetchen

let header = document.querySelector('header')

mijzelfKrijgen()

async function mijzelfKrijgen () {
    const url = 'https://fdnd.directus.app/items/person/305'
    
    let response = await fetch(url)
    let preMezelf = await response.json()
    let mezelf = preMezelf.data

    let mijnNaam =
    `<h1>${mezelf.nickname}</h1>`

    header.insertAdjacentHTML("afterbegin", mijnNaam)
}

// rugzak openen


const rugzakKnop = document.querySelector('button:nth-of-type(1)')
const openRugzakKnop = document.querySelector('button:nth-of-type(2)')

const halsband = document.querySelector('button:nth-of-type(3)')
const objecten = document.querySelector('img[src*="images/objecten/"]')

rugzakKnop.addEventListener('click', rugzakOpenen)

function rugzakOpenen() {
    rugzakKnop.classList.add('hidden')
    openRugzakKnop.classList.remove('hidden')
}

// objecten uit rugzak halen
openRugzakKnop.addEventListener('click', objectenEruit)

function objectenEruit() {
    let volgendObject = document.querySelector("button[data-class]:not([data-done])")
    let object = volgendObject.dataset.class

    volgendObject.dataset.done = object;

}
