# !/bin/bash

read -p "entrer l'url à tester :" url 



echo "test url valide"
node test200.js $url 


echo "test url invalide"
node test404.js $url 
