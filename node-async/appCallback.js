const request = require('request')
function printFilms(str, callback){
    request('https://ghibliapi.herokuapp.com/films', function (error, response, body) {
        if(response){
            console.log(str)
        }
        return callback()
});
    
}

function printAllCallback(){
    printFilms('A',() =>{
        printFilms('B', ()=>{
            printFilms('C', ()=>{

            })
        })
    })

}
printAllCallback()