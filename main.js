let headshots = document.querySelectorAll('.headshot');
let names = document.querySelectorAll('.name');
let emails = document.querySelectorAll('.email');
let addresses = document.querySelectorAll('.address');
let dates = document.querySelectorAll('.dates');

console.log(customers[1]);

let counter = 0;
window.addEventListener('load', () => {
    for (let headshot of headshots) {
        headshot.src = customers[counter].picture.medium;
        counter++;
    }

    counter = 0;

    for (let name of names) {
        name.innerText =
            customers[counter].name.first + ' ' + customers[counter].name.last;
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
            customers[counter].location.state +
            ' ' +
            customers[counter].location.country;
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
            customers[counter].location.state +
            ' ' +
            customers[counter].location.country;
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
