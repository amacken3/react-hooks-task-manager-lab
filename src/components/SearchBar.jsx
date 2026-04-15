import React, { useRef, useState } from "react";
import TaskList from "./TaskList";
import { TaskContext } from "../context/TaskContext";

function SearchBar() {
  const [query, setQuery] = useState("");
  const searchInputRef = useRef(null);

  function handleSearch(e) {
    setQuery(e.target.value);
  }


  return (
    <div>
      <input
        type="text"
        placeholder="Search tasks..."
        value={query}
        onChange={handleSearch}
        ref={searchInputRef}
      />
      <TaskList query={query}/>
    </div>
  );
}

export default SearchBar;
