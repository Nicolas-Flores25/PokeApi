<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

const ButtonPokeApi = document.getElementById('ButtonPokeApi');

LlamaApi = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(response => response.json())
        .then(data => {
            const div = document.createElement('div');
            div.classList.add('pokemon');
            div.innerHTML = `
                <div class="Pokemon">
                    <img src="${data.sprites.front_default}" alt="${data.name}">
                </div>
                <h2>${data.name}</h2>
                <span>Experiencia de base: ${data.base_experience}</span>`;
            const contenedorPokemon = document.querySelector('.contenedor');
            contenedorPokemon.appendChild(div);
        })
        .catch(error => console.log(error));
}

ButtonPokeApi.addEventListener('click', LlamaApi);
