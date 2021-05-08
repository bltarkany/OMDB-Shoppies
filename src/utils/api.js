import axios from 'axios'
require('dotenv').config();

export default {
    searchMovie: function(query){
        return axios.get(`https://www.omdbapi.com/?t=${query}&apikey=${process.env.REACT_APP_API_KEY}`)
    }
}