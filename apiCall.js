const axios = require("axios");

axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response => {
        console.log(response.data);
    })
