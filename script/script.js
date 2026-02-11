// api fetchen

const container = document.querySelector('header div')
const main = document.querySelector('main')

mijzelfKrijgen()

async function mijzelfKrijgen () {
    const url = 'https://fdnd.directus.app/items/person/305'
    
    let response = await fetch(url)
    let bijnaMijnData = await response.json()
    let mijnData = bijnaMijnData.data

    let spanNaamObject = JSON.parse(mijnData.custom)

    let mijnNaamH1 =
    `<h1>${spanNaamObject.spanName}</h1>`

    container.insertAdjacentHTML('afterbegin', mijnNaamH1)

}

// rugzak openen
const rugzakKnop = document.querySelector('button:nth-of-type(1)')
const openRugzakKnop = document.querySelector('button:nth-of-type(2)')

rugzakKnop.addEventListener('click', rugzakOpenen)

function rugzakOpenen() {
    rugzakKnop.classList.add('hidden')
    openRugzakKnop.classList.remove('hidden')
}

// objecten uit rugzak halen
openRugzakKnop.addEventListener('click', objectenEruit)

function objectenEruit() {
    let volgendObject = document.querySelector('button[data-class]:not([data-done])')
    let object = volgendObject.dataset.class

    volgendObject.dataset.done = object;
}

//dialog openen / sluiten
const alleSluitButtons = document.querySelectorAll('dialog button')
const alleObjecten = document.querySelectorAll('button[data-class]')

alleObjecten.forEach( function(object) {
    const dialog = object.nextElementSibling
    object.addEventListener('click', () => {
        dialog.showModal()
    })

    const sluitButton = dialog.querySelector('button')
    sluitButton.addEventListener('click', () => {
        dialog.close()
    })
})

// dialog sluiten bij drukken a
const meerInfoLink = document.querySelector('dialog a')
const linkDialog = document.querySelector('dialog:last-of-type')

meerInfoLink.addEventListener('click', closeDialog)

function closeDialog() {
    linkDialog.close()
}