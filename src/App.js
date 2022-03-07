import React, { useState, useEffect } from 'react';
import { getAllPokemon, getPokemon } from './data/pokemon';
import Card from './components/Card';
import Topbar from './components/Topbar/Topbar';
import CustomButton from './components/CustomButton';

function App() {
  const [pokemon_data, set_pokemon_data] = useState([]);
  const [next_url, set_next_url] = useState('');
  const [previous_url, set_previous_url] = useState('');
  const [loading, set_loading] = useState(true);
  const api_url = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(api_url); 
      set_next_url(response.next); 
      set_previous_url(response.previous); 
      let pokemon = await loadingPokemon(response.results); 
      set_loading(false);
    }
    fetchData();
  }, []);

  const next = async () => {
    set_loading(true);
    let data = await getAllPokemon(next_url);
    await loadingPokemon(data.results);
    set_next_url(data.next);
    set_previous_url(data.previous);
    set_loading(false);
  }

  const prev = async () => {
    if (!previous_url) return;
    set_loading(true);
    let data = await getAllPokemon(previous_url);
    await loadingPokemon(data.results);
    set_next_url(data.next);
    set_previous_url(data.previous);
    set_loading(false);
  }

  const loadingPokemon = async (data) => {
    let _pokemon_data = await Promise.all(
      data.map(async pokemon => {
        let pokemon_record = await getPokemon(pokemon.url);
        return pokemon_record;
      })
    );

    set_pokemon_data(_pokemon_data);
  };

  return (
    <>
      { loading ? <h1 className="loading">Actualizando...</h1> : (
        <>
          <Topbar/>
            <section className="start">
              <nav className="pagination">
                <CustomButton label="Anterior" click={prev}/>
                <CustomButton label="Siguiente" click={next}/>
              </nav>
              <h2>Listado de Pokemons</h2>
              <div className="list-view">
                {pokemon_data.map((pokemon) => {
                  return <Card key={pokemon.id} pokemon={pokemon}/>
                })}
              </div>
              <nav className="pagination">
                <CustomButton label="Anterior" click={prev}/>
                <CustomButton label="Siguiente" click={next}/>
              </nav>
            </section>
        </>
      )}
    </>
  );
}

export default App;
