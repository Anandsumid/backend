const request = require('request')
function printFilms(str){
    request('https://ghibliapi.herokuapp.com/films', function (error, response, body) {
        if(response){
            console.log(str)
        }
});
    
}

function printAll(){
    printFilms('A')
    printFilms('B')
    printFilms('C')
}
printAll()
