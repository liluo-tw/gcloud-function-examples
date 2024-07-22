# NodeJS Http Example

This is an example for Cloud Function which could be triggerred by HTTP request. You can use it to represent your backend API. Please duplicate and modify it to meek your needs.  


## Local Development
*  install the function's dependencies:
```shell
npm install -g npx
```

```shell
npm install
```

* Unit test

```shell
npm test
```

* Test local deployment
```shell
npm start 
```

```shell
curl localhost:8080 \
  -X GET \
  --data-urlencode "temp=80"
```


## Integration Test with GCloud

```
gcloud auth application-default login
```

* Deploy a Cloud Function
```
gcloud functions deploy li-nodejs-http-temprature-converter \
--gen2 \
--runtime=nodejs20 \
--region=us-central1 \
--source=. \
--entry-point=convertTemp \
--memory=512MB \
--trigger-http 
```


* Get a Cloud Function uri
```shell
gcloud functions describe li-nodejs-http-temprature-converter --gen2 --region us-central1 --format="value(serviceConfig.uri)"
```

* Test the Cloud Function
```shell
curl -X GET https://li-nodejs-http-temprature-converter-7bst74hona-uc.a.run.app \
    -H "Authorization: Bearer $(gcloud auth print-identity-token)" \
    --data-urlencode "temp=80"
```

* clean up if needed
```
gcloud functions delete li-nodejs-http-temprature-converter --gen2 --region us-central1
```
