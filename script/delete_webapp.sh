source script/var_for_create.sh

echo "delete web app Azure : $WebAppName"
az webapp delete --name $WebAppName --resource-group $ResourceGroup 

echo "delete appservice plan"
az appservice plan delete --name $AppServiceName --resource-group $ResourceGroup

source script/delete_var.sh