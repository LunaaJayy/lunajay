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