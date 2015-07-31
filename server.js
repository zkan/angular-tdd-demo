var express = require('express');
var cors = require('cors');

var app = express();

app.use(cors());

var contacts = [{
    "name": "shotaro kaneda",
    "age": 16,
    "occupation": "Futuristic Biker Gang Captain",
    "email": "kaneda@capsules.co.jp"
}, {
    "name": "jon snow",
    "age": 15,
    "occupation": "Lord Commander of the Wall",
    "email": "jon@nightswatch.wl"
}, {
    "name": "lara croft",
    "age": 22,
    "occupation": "Tomb Raider",
    "email": "lara@croft.co.uk"
}];

app.get('/contacts', function(req, res) {
    res.status(200).json(contacts);
});

app.listen(9001);
