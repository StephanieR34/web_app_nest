# azure web-app peu etre deployée de façon manuelle ou automatisé

## deployment automatisé 
Ils peut se faire à partir de plusieurs sources :

    - Azure DevOps : vous pouvez envoyer (push) votre code à Azure DevOps, générer votre code dans le cloud, exécuter les tests, générer une version à partir du code et, enfin, envoyer votre code à une application web Azure.
    - GitHub : Azure prend en charge le déploiement automatisé directement à partir de GitHub. Quand vous connectez votre dépôt GitHub à Azure pour le déploiement automatisé, les modifications que vous envoyez à votre branche de production sur GitHub sont déployées automatiquement pour vous.
    - Bitbucket : de façon similaire à GitHub, vous pouvez configurer un déploiement automatisé avec Bitbucket.

## le deployment Manuel

Il existe quelques options pour envoyer (push) votre code manuellement sur Azure :

    - Git : Les applications web App Service proposent une URL Git que vous pouvez ajouter en tant que dépôt distant. Envoyez (push) votre application au dépôt distant pour la déployer.
    - CLI : webapp up est une fonctionnalité de l’interface de ligne de commande az qui permet d’empaqueter votre application et de la déployer. Contrairement à d’autres méthodes de déploiement, az webapp up peut créer une application web App Service pour vous si ce n’est pas déjà fait.
    - Déploiement ZIP : utilisez curl ou un utilitaire HTTP similaire pour envoyer un fichier zip de vos fichiers d’application à App Service.
    - FTP/S : FTP ou FTPS est un moyen traditionnel d’envoyer (push) votre code à de nombreux environnements d’hébergement, notamment App Service.

