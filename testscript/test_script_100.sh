# !/bin/bash

read -p "entrer l'url à tester :" url 

i=1
while [ $i -le 100 ]
do
    # echo $i
    node test200.js $url &
    


    # echo "test url invalide"
    # node test404.js $url &
    ((i++))
done
