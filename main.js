let headshots = document.querySelectorAll('.headshot');
let names = document.querySelectorAll('.name');
let emails = document.querySelectorAll('.email');
let addresses = document.querySelectorAll('.address');
let dates = document.querySelectorAll('.dates');

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

let counter = 0;

window.addEventListener('load', () => {
    for (let headshot of headshots) {
        headshot.src = customers[counter].picture.large;
        counter++;
    }

    counter = 0;

    for (let name of names) {
        name.innerText =
            toTitleCase(customers[counter].name.first) +
            ' ' +
            toTitleCase(customers[counter].name.last);
        counter++;
    }

    counter = 0;

    for (let email of emails) {
        email.innerText = customers[counter].email;
        counter++;
    }

    counter = 0;

    for (let address of addresses) {
        address.innerText =
            customers[counter].location.street.number +
            ' ' +
            customers[counter].location.street.name +
            '\n' +
            customers[counter].location.city +
            ', ' +
            nameToAbbr(customers[counter].location.state) +
            ' ' +
            customers[counter].location.postcode;
        counter++;
    }

    counter = 0;

    for (let date of dates) {
        date.innerText =
            'DOB: ' +
            moment(customers[counter].dob.date).format('MMM DD, YYYY') +
            '\n' +
            'Customer since: ' +
            moment(customers[counter].registered.date).format('MMM DD, YYYY');
    }
});
