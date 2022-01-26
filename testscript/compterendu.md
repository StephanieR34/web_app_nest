# test manuel

## avec app deployer sur Docker
### test d'une requete get:
on optients une latence de 13ms
### test de 10 requetes get:
latence de 35 à 50 ms 
### test sur 100 requetes get:
latence de 400 à 700 ms

## avec app sur azure web app
### test 1 requete:
latence de 170 à 190 ms 
### test 10 requetes:
latence de 600 à 950 ms
### test 100 requetes:
latence de 700 à 1200ms

# test Gatling
## avec une seule instance
à 1000 ça passe à 10000 ca failed (cf result_gatling)
## avec scale out =>3 instances
10000 requete 15% failed 82% à 1200ms
## avec un scale up vers un p1v2 sans scale auto
10000 requetes 75% failed 
## avec un scale up auto qui cree de nouvelle instance si on depasse les 60 % de charge du cpu
10000 requetes 1% failed 65% à 1200ms

# Sur quel criteres faire un scale:
Il est financierement plus interressant de faire un scale up de maniere a pouvoir mettre en place 
un scale-out automatique en fonction de critere que l'on definie ( depassement d'un certain % de cpu, pourcentage de mémoires, data in, data ou...)