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
  -X POST \
  -H "Content-Type: application/json" \
  -d '{
        "temp": 100
      }'
```


## Integration Test with GCloud

```
gcloud auth application-default login
```

* Deploy a Cloud Function
```shell
../scripts/deploy_function.sh nodejs-http-function entry
```


* Get a Cloud Function uri
```shell
gcloud functions describe nodejs-http-function --gen2 --region us-central1 --format="value(serviceConfig.uri)"
```

* Test the Cloud Function
```shell
curl CLOUD_FUNC_URL \
    -X POST \
    -H "Content-Type: application/json" \
    -d '{
        "temp": 100
      }'
```

* clean up if needed
```shell
gcloud functions delete nodejs-http-function --gen2 --region us-central1
```
