

const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



app.get('/', (req, res)  => {
     //res.send('Hola mundo');
     
     res.render('home', {nombre: 'raÚl arRiBas'});
});
 
app.get('/about', (req, res)  => {
     //res.send('Hola mundo');
     
     res.render('about');
});
 
/* app.get('/', (req, res)  => {
     //res.send('Hola mundo');
     
     let salida = {
          nombre: 'Raúl',
          edad:39,
          url: req.url
     };

     res.send(salida);
}); */

/* app.get('/data', (req, res)  => {
     res.send('Hola data');
}); */
 
app.listen(port, () => {
     console.log(`Escuchando peticiones en el puerto ${port}`);
});