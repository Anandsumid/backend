const request = require('request')

function printFilms(str, callback) {
    request('https://ghibliapi.herokuapp.com/films', function (error, response, body) {
        console.log(str)
        return callback()

    });

}
async function printAllAsyncs() {
    await printFilms('A', () => {});
    await printFilms('B', () => {});
    await printFilms('C', () => {});
}
printAllAsyncs()