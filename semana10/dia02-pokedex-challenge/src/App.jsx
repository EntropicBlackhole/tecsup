import { useEffect, useState } from 'react'
import './App.css'
import './components/PokemonsList';
import './components/Header';
function App() {
  const [pokemons, setPokemons] = useState({});

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon');
      const data = await res.json();
      setPokemons(data);
    }
    fetchPokemon();
  }, []);
  return (
    <>
      <Header title="Poke Catalog"></Header>
      <main className="w 1/2 m-auto">
        <PokemonsList pokemons={pokemons}></PokemonsList>
      </main>
    </>
  )
}

export default App
