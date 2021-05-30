import PokemonItem from "./PokemonItem";

function PokemonGrid({ items, loading }) {
  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <PokemonItem key={item.id} item={item} />
      ))}
    </section>
  );
}

export default PokemonGrid;
