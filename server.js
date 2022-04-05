const express = require('express');
const app = express();
const port = 3000;

// set view engine
app.set('view engine', 'ejs');
//set public dir to static public
app.use(express.static(__dirname + '/public'));


//routes
app.get('*', (req, res) => {
    res.render('index')
});



app.listen(port);
console.log(`Server running! Listening on port ${port}`);