#!/bin/bash
source script/var_for_create.sh

echo "Creating App Service Plan: $AppServiceName"
az appservice plan create --resource-group $ResourceGroup -n $AppServiceName --sku B1 --is-linux

echo "Creating Azure Web App for Linux: $WebAppName"
az webapp create -p $AppServiceName -n $WebAppName --resource-group $ResourceGroup --runtime "node|14-lts"

echo "Setting app setings for our web app: $WebAppName"
az webapp config appsettings set -n $WebAppName --resource-group $ResourceGroup --settings SCM_DO_BUILD_DURING_DEPLOYMENT=true

echo "Deploying Web App Azure : $WebAppName"
az webapp deployment source config-zip -n $WebAppName --resource-group $ResourceGroup --src $PathZipFile

source script/delete_var.sh