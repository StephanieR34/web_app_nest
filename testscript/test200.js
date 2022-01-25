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
request.get({
    url : urlok,
    time : true},(err, res) => {
    // if (err) {
    //     return console.log(err);
    // }
    if (res.statusCode != 200) {
        console.log("test status code 200 : " + res.statusCode);
        process.exit(1);
    }
    else {
        console.log("test status code 200 : " + res.statusCode + ' Request time in ms', res.elapsedTime);
        process.exit(0);
    }
});