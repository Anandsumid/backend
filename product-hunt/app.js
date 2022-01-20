const request = require('request')
let pep = ''
var fs = require('fs');


request('http://52.221.191.153/api/foods', function (error, response, body) {
  data = JSON.parse(body).data;

  fs.writeFile("foods.txt","", (err) => {
    if (err) {
      console.log(err);
    }
    else {
    }
  });

  for(i=0;i< data.length; i++){

    fs.appendFile("foods.txt", data[i].name + "|" + data[i].price + "\n" + data[i].category, (err) => {
        if (err) {
          console.log(err);
        }
        else {
        }
      });
      
  }

});
