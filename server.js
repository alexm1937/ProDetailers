const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');//connection to mysql server via sequelize

//set app and port
const app = express();
const PORT = process.env.PORT || 3000;

// set view engine
app.set('view engine', 'ejs');

//middleware
//set public dir to static public
app.use(express.static(__dirname + '/public'));


//routes
app.use(routes);


// app.listen(PORT);
// console.log(`Server running! Listening on port ${PORT}`);

sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, ()=> console.log(`Now listening on ${PORT}`));
});
