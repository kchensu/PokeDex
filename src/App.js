import "./App.css";
import Header from "./components/Header";
import PokemonGrid from "./components/PokemonGrid";
import { useState, useEffect } from "react";

const App = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=251"
  );

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
        await allPokemons.sort((a, b) => a.id - b.id);
      });
    }
    createPokemonObject(data.results);
    setLoading(false);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="container">
      <Header />
      <PokemonGrid loading={loading} items={allPokemons} />
    </div>
  );
};

export default App;
