const cors = require('cors'); // http header to allow cross origin requests
const axios = require('axios'); // http client
const express = require('express'); // minmalist web framework
const env = require('dotenv').config(); // environment variables


const app = express();

app.use(cors());
app.use(express.json());

app.post('/*', (req, res) => {

    const secret = env.parsed.SECRET_KEY;
    const response = req.body.response;
    
    axios.post('https://www.google.com/recaptcha/api/siteverify', null, { params : {
        secret,
        response
    }}).then((response) => {
        if(response.data.success) {
            res.send({
                success: true,
                email: env.parsed.EMAIL,
            });
            
        } else {
            res.send({
                success: false,
                message: 'Captcha failed'
            });
        }
    
    }).catch((error) => {
        res.send(error);
    });
});

app.listen(5000, () => console.log('Listening on port 5000'));