const request = require('request');


function arg(){
  // Make sure we got a url on the command line.
  if (process.argv.length < 3) {
      console.log('veuillez entrez un url valide');
      process.exit(1);
  }
  
  var url = process.argv[2];
  return url;
}

function checkroute(){
  var url_routes = arg().split("/")
  // console.log("url_routes = "+ url_routes)
  let possible_route = [1, 2, 3]
  let route = Number(url_routes[1]) 
  let bonne_route = false
  // console.log("route = " + route +" "+ typeof route)
  
  for (let i =0 ; i < possible_route.length; i++){
    // console.log("possible_route[i] = " + possible_route[i] + " "+ typeof possible_route[i])
    if (route === possible_route[i])
    {
      bonne_route = true
      break
    }
    else {
      bonne_route = false
      continue
    }
  }
  return bonne_route;

}


function checkport(){
  let url_routes = arg().split("/")
  // console.log(url_routes)
  let url_port = url_routes[0].split(':')
  // console.log(url_port[1])
  let bon_port = true
  if (url_port[1]=== "3000") {
    bon_port = true
  }else {
    bon_port = false
  }

  // console.log(bon_port)
  return bon_port
}

function testrequest() {
  
  const options = {
      url: 'http://' + arg(),
      json: true
  };
  if ((arg().split("/")).length == 2){
    if (!checkroute()){
      console.log("vous n'avez pas entrer une route valide")
    }
    // console.log("checkroute = " + checkroute())
  }
  if (!checkport()) {
    console.log("vous devez entrez le port 3000")
  }

  request.get(options, (err, res, body) => {
      if (err) {
        return console.log(err);
      }
      console.log(`Status: ${res.statusCode}`);
      console.log(body);
  });
}
testrequest()