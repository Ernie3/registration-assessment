function getRegisteredUsers() {
    return makeRequest('/api/register', 'GET');
}

function makeRequest(url, method) {
    return new Promise((resolve, reject) => {
        fetch(url, { method: method })
            .then(response => {
                response.json()
                    .then(json => resolve(json))
                    .catch(error => reject(error));
            })
            .catch(error => reject(error))
    });
}

function validateForm() {
    var form = document.forms["register"];

    var firstName = form["firstName"].value;
    if (firstName == "") {
        alert("First name must be filled out");
        return false;
    }

    var lastName = form["lastName"].value;
    if (lastName == "") {
        alert("Last name must be filled out");
        return false;
    }

    var address1 = form["address1"].value;
    if (address1 == "") {
        alert("Address 1 must be filled out");
        return false;
    }

    var city = form["city"].value;
    if (city == "") {
        alert("City must be filled out");
        return false;
    }

    var zip = form["zip"].value;
    if (zip == "") {
        alert("Zip must be filled out");
        return false;
    }
    if (zip.length != 5 && zip.length != 9) {
        alert("Zip must have only 5 or 9 digits.");
        return false;
    }

    var country = form["country"].value;
    if (country == "") {
        alert("Country must be filled out");
        return false;
    }
    if (country != "US") {
        alert("US is the only supported country");
        return false;
    }
}
