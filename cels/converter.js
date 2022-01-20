const args = process.argv.slice(2)
let result = ''
const grad = args[0]
const unit = args[1]
if(unit==='C'){
   result= `${args[0]} ${args[1]} is ${convertToF(grad)} F`
}
else if(unit==='F'){
    result = `${args[0]} ${args[1]} is ${convertToC(grad)} C`
}
function convertToF(celsius){
    let fahr = (celsius * 9)/5 +32
    return fahr
}
function convertToC(fahre){
    let cels = (fahre-32)*0.5556 
    return cels
}

console.log(result)
  