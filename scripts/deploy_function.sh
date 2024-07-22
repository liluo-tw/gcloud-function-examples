#! /bin/bash

if [ $# -lt 2 ]
  then
    printf "Pls give function_name & entry_name.\nexample: ./scripts/deploy_function.sh nodejs-http-trigger entry"
    exit 1
fi

function_name=$1
entry_name=$2
echo "Will deploy cloud function: $function_name"

cd $(git rev-parse --show-toplevel)

gcloud functions deploy $function_name \
--gen2 \
--runtime=nodejs20 \
--region=us-central1 \
--source="./$function_name" \
--entry-point=$entry_name \
--memory=512MB \
--allow-unauthenticated \
--trigger-http