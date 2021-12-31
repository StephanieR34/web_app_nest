const request = require('request');
// const nock = require('nock');

function arg(){
    // Make sure we got a url on the command line.
    if (process.argv.length < 3) {
        console.log('veuillez entrez un url valide');
        process.exit(1);
    }
    
    var url = process.argv[2];
    return url;
  }

const urlok = arg() 
request.get(urlok, (err, res) => {
    // if (err) {
    //     return console.log(err);
    // }
    if (res.statusCode != 200) {
        console.log(res.statusCode);
        process.exit(1);
    }
    else {
        console.log(res.statusCode + " ok");
        process.exit(0);
    }
});