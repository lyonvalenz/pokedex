'use strict'

const listaPoke = document.getElementById ('listaPoke')
const nombrePoke = document.getElementById ('nombre')
const pokeNumber =150


const getPoke = () => {
    const URL = `https://pokeapi.co/api/v2/pokemon`
    fetch(URL)
    
    .then ((result) => result.json())
    .then ((pokemons) => {
    nombrePoke.innerHTML = pokemons.results[0].name
        console.log("Soy un pokemon", pokemons);
    })

}

getPoke()
// const getPoke = () => {
//     const URL = `https://pokeapi.co/api/v2/pokemon`
//     fetch(URL)
    
//     .then ((result) => result.json())
//     .then ((data) => {
//         createPokemon(data);
//     })
    
// }


// const createPokemon = (pokemon) => {
//     const card = document.createElement ('div')
//     card.classList.add('pokemon-block')

//     const spriteContainer = document.createElement('div')
//     spriteContainer.classList.add('img-container')

//     const sprite = document.createElement('img')
//     sprite.src = pokemon.sprites.front_default

//     spriteContainer.appendChild(sprite)

//     const number = document.createElement('p')
//     number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`

//     const name = document. createElement('p')
//     name.classList.add('name')
//     name.textContent = pokemon.name

//     card.appendChild(spriteContainer)
//     card.appendChild(number)
//     card.appendChild(name)

//     pokemonContainer.appendChild(card)
// }


