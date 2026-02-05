// api fetchen

mijzelfKrijgen()

async function mijzelfKrijgen () {
    const url = 'https://fdnd.directus.app/items/person/305'
    
    let response = await fetch(url)
    let preMezelf = await response.json()
    let mezelf = preMezelf.data
    
    console.log(mezelf.name)
}