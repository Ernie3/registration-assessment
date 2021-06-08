const express = require("express");
const router = express.Router();

const User = require("../lib/db").User;

router.post('/', function(req, res) {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let address1 = req.body.address1;
    let address2 = req.body.address2;
    let city = req.body.city;
    let state = req.body.state;
    let zip = req.body.zip;
    let country = req.body.country;

    User.create({
        firstName: firstName,
        lastName: lastName,
        address1: address1,
        address2: address2,
        city: city,
        state: state,
        zip: zip,
        country: country
    }).then(function(user) {
        return res.status(201).sendFile("src/public/confirm.html", { root: '.' });
    }).catch(function(err) {
        console.error(err);
        let error = err.errors[0];
        return res.status(400).json({
            message: error.message,
            type: error.type,
            field: error.path
        });
    });
});

router.get('/', function(req, res) {
    User.findAll({
        attributes: { exclude: ['id', 'updatedAt'] },
        order: [['createdAt', 'DESC']]
    }).then(function(users) {
        return res.json(users);
    });
});

module.exports = router;
