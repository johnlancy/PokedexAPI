async function getPokemon() {
	const res = await fetch('https://pokeapi.co/api/v2/pokemon', {
		method: 'GET',
	});

	const data = await res.json();

	const pokemon = data.results;
	// let i defines the index. in this case i= index as long i is less than items in the pokemon array. Do logic then incriment by one
	for (let i = 0; i < pokemon.length; i++) {
		const poke = pokemon[i];
		const pokemonLink = document.createElement('a');
		pokemonLink.setAttribute('href', poke.url);
		pokemonLink.innerHTML = poke.name;
		document.getElementById('pokemon-data').appendChild(pokemonLink);
	}
}

getPokemon();
