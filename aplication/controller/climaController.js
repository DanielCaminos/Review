const fetch = require("node-fetch");
const dotenv = require("dotenv");
dotenv.config();

var options = {
    method: 'GET',
    
    headers: {
      'x-rapidapi-host': 'restcountries-v1.p.rapidapi.com',
      'x-rapidapi-key': '1d74df2c52mshcb455efa327eaabp13fb16jsn9a7ea0d4cb5d'
    }
  };
var URL = 'https://restcountries-v1.p.rapidapi.com/all';


const getUrl = (url, options) => {
    return fetch(url, options)
      .then(res => res.json())
      .catch(err => {
        console.error(`Error ${err}`);
      });
  };

  let climaController = {
    getData: async (req, res) => {
      const data = await getUrl(URL, options);
  
      res.json({
        clima: data
      });
    }};

    module.exports =  climaController;