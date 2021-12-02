const express = require('express')
const axios = require('axios')
const cors = require('cors');


const app = express();
const port = process.env.PORT || 5000;


require('dotenv').config()


app.use(cors());
app.use(express.json());



app.listen(port, () => {
    console.log(`Listening at ${port}`)
})


let api_key = process.env.API_KEY

app.get('/Crypto', (req,res) => {
    axios
        .get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=10&convert=USD',
        {
            headers:{'X-CMC_PRO_API_KEY': api_key}
        })
        .then(coins => console.log(res.json(coins.data))) 
})
