import "./App.css";
import Header from "./components/Header";
import PokemonGrid from "./components/PokemonGrid";
import Search from "./components/Search";
import { useState, useEffect } from "react";

const App = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  async function getAllPokemons() {
    const res = await fetch(loadMore);
    const data = await res.json();
    console.log(data);
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
  }

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="container">
      <Header />
      <Search />
      <PokemonGrid loading={loading} items={allPokemons} />
      <button className="load-more" onClick={() => getAllPokemons()}>
        <h1>Load More</h1>
      </button>
    </div>
  );
};

export default App;
