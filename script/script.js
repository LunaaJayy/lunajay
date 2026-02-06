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

const rugzak = document.querySelector('img:nth-of-type(1)')
const openRugzak = document.querySelector('img:nth-of-type(2)')
const halsband = document.querySelector('img:nth-of-type(4)')
const objecten = document.querySelector('img[src*="images/objecten/"]')

rugzak.addEventListener('click', rugzakOpenen)

function rugzakOpenen() {
    rugzak.classList.add('hidden')
    openRugzak.classList.remove('hidden')
}

// objecten uit rugzak halen
openRugzak.addEventListener('click', halsbandUit)

function halsbandUit() {
    halsband.classList.add('halsbandPos')

}
