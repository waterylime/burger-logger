
const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const db = require('./mobles');

const PORT = process.eventNames.PORT || 3000;
const app = express ();
 
   
app.use(express.static("public"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine('handlebars', exphbs({defaultLayout:'main'}));

app.set('view engine', 'handlebars');

let routes = require('./controllers/burgers_controller.js');
app.use(routes);


db.sequlize.sync().then(fuction(){
    app.listen(PORT, ()=>{
        console.log('Listeningt on PORT' + PORT);
        
    })
});

