// 'use strict'


// const pikachu = document.getElementById ('1')
// const id = document.getElementById('IDE')
// const nombre = document.getElementById('NAME')
// const moves = document.getElementById('MOVES')
// const peso = document.getElementById('PESO')


// const getPikachu = () => {
//     fetch(`https://pokeapi.co/api/v2/pokemon/`)
    
//     .then ((result) => result.json())
//     .then ((data) => {
    
//     id.innerHTML = `ID: ${JSON.stringify(data.id)}`
//     nombre.innerHTML = ` ${JSON.stringify(data.name)}`
//     moves.innerHTML = `Habilidad: ${JSON.stringify(data.abilities[0].ability.name)}`
//     peso.innerHTML = `Peso: ${JSON.stringify(data.weight)} libras`
//         console.log(data);
//     })
//     array.forEach(element => {
        
//     });
// }

// getPikachu()


'use strict'


const nombrePoke = document.getElementById ('nombre')



const getPoke = (id) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    
    .then ((result) => result.json())
    .then ((data) => {
        createPokemon(data)
    });
}

function fetchPokemons(number){
    for (let i = 1; i <= number; i++) {
        getPoke(i)
        
    }
}



function createPokemon(pokemon){
    const card = document.createElement ('div')
    card.classList.add('pokemon-block')

    const spriteContainer = document.createElement('div')
    spriteContainer.classList.add('img-container')

    const sprite = document.createElement('img')
    sprite.src = pokemon.sprites.front_default

    spriteContainer.appendChild(sprite)

    const number = document.createElement('p')
    number.textContent = `#${pokemon.id}`

    const name = document.createElement('p')
    name.classList.add('name')
    name.textContent = pokemon.name

    card.appendChild(spriteContainer)
    card.appendChild(number)
    card.appendChild(name)

    nombrePoke.appendChild(card)

}

fetchPokemons(5)