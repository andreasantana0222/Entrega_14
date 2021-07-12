const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend:true}));

//app.get("/",(req, resp) =&gt; resp.send("<h1>Express<font color='steelblue'>JS</font> funcionando</h1>"));


app.get("/prueba", (req,resp) => {
  var listaDatos = [
  {
    "id": 1,
    "fecha":"Martes, 4 de Septiembre de 1982"
  },
  {
    "id":2,
    "fecha":"Miercoles, 10 de Febrero de 1999"
  }];

  resp.send(listaDatos);
});

app.listen(5000, () =>{
  console.log("Servidor funcionando en http://localhost:5000/");
} );
