var fs = require('fs')
fs.writeFile("input.txt","", (err) => {
    if (err) {
      console.log(err);
    }
    else {
    }
  });
fs.readFile('input.txt', function (err, data ){
    if(err) return console.error(err)
    console.log(data.toString())
})

console.log('Program Ended')