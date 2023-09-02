import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Karakterler from './components/Karakterler';


const App = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");

  const changeHandler = (e) => {
    const {value} = e.target;
    setSearch(value);
  }

  useEffect( () => {

    axios
      .get("https://swapi.dev/api/people/")
      .then((res) => {
        const searchResults = res.data.filter((item) => {
          return item.name.toLowerCase().includes(search.toLowerCase()) || item.hair_color.toLowerCase().includes(search.toLowerCase())
        })
        setCharacters(searchResults);
      })
  },[search])

  return (
    <div className="App">
      <Header search={search} changeHandler={changeHandler} />
      <Karakterler characters={characters} />
    </div>
  );
}

export default App;
