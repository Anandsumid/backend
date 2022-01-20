const request = require('request')

function printFilms(str, callback) {
    const myPromise = new Promise((resolved, rejected) => {
        request('https://ghibliapi.herokuapp.com/films', function (error, response, body) {
            if (response) {
                console.log(str)
                return resolved()
            } else {
                return rejected()
            }

        });
    });
    return myPromise;

}

function printAllPromise() {
    printFilms('A', () => {})
        .then(() => {
            return printFilms('B', () => {})
        })
        .then(() => {
            return printFilms('C', () => {})
        })
}
printAllPromise()