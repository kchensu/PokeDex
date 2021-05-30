function PokemonItem({ item }) {
  console.log(item);
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img
            src={item.sprites.other["official-artwork"].front_default}
            alt=""
          />
        </div>
        <div className="card-back">
          <h1>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h1>
          <ul>
            <li>
              <strong>ID:</strong> {item.id}
            </li>
            <li>
              <strong>Type:</strong>{" "}
              {item.types.map((type) => {
                return <div>{type.type.name}</div>;
              })}
            </li>
            <li>
              <strong>Weight:</strong> {item.weight}
            </li>
            <li>
              <strong>Height:</strong> {item.height}
            </li>
            <li>
              <strong>Abilities:</strong>{" "}
              {item.abilities.map((ability) => {
                return <div>{ability.ability.name}</div>;
              })}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PokemonItem;
