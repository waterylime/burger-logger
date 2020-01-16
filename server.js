const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const db = require('./mobles');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');

let routes = require('./controllers/burgers_controller.js');
app.use(routes);

db.sequlize.sync().then(function() {
	app.listen(PORT, () => {
		console.log('Listeningt on PORT' + PORT);
	});
});
