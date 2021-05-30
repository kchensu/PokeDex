function Button({ click }) {
  return (
    <div>
      <button className="load-more" onClick={click}>
        <h1>Load More</h1>
      </button>
    </div>
  );
}

export default Button;
