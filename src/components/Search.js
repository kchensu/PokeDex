import { useState } from "react";

function Search() {
  const [text, setText] = useState("");
  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Pokemon"
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
}

export default Search;
