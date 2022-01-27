source script/var_for_create.sh

echo "deployement automatic branch prod"
az webapp deployment source config -n $WebAppName \
    -g $ResourceGroup \
    --repo-url $Repos \
    --branch prod

source script/delete_var.sh