import axios from "axios";

export const getCharakters = () =>
    axios
        .get("https://rickandmortyapi.com/api/character")
        .then(response => response.data)
