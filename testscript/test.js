const request = require('request');


function read(){
  // Make sure we got a filename on the command line.
  if (process.argv.length < 3) {
      console.log('veuillez entrez un url valide');
      process.exit(1);
  }
  
  // Read the file 
  var url = process.argv[2];
  return url;
}
read()

const options = {

    url: 'http://' + read(),

    json: true

};

request.get(options, (err, res, body) => {

    if (err) {

        return console.log(err);

    }

    console.log(`Status: ${res.statusCode}`);

    console.log(body + typeof body);

});