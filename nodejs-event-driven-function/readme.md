# NodeJS Http Example

This is an example for Cloud Function which could be triggerred by cloud event.


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

[//]: # todo: fix content()
```shell
curl localhost:8080 \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{
  "bucket": "li-test-intake",
  "data": {
    "bucket": "li-test-intake",
    "contentLanguage": "en",
    "contentType": "text/plain",
    "crc32c": "R1jUOQ==",
    "etag": "CJe7hO/0u4cDEAE=",
    "generation": "1721694781775255",
    "id": "li-test-intake/li_0722_test_file.txt/1721694781775255",
    "kind": "storage#object",
    "md5Hash": "5Z/5eUEET4XfUpfhwwLSYA==",
    "mediaLink": "https://storage.googleapis.com/download/storage/v1/b/li-test-intake/o/li_0722_test_file.txt?generation=1721694781775255&alt=media",
    "metageneration": "1",
    "name": "li_0722_test_file.txt",
    "selfLink": "https://www.googleapis.com/storage/v1/b/li-test-intake/o/li_0722_test_file.txt",
    "size": "12",
    "storageClass": "STANDARD",
    "timeCreated": "2024-07-23T00:33:01.793Z",
    "timeStorageClassUpdated": "2024-07-23T00:33:01.793Z",
    "updated": "2024-07-23T00:33:01.793Z"
  },
  "datacontenttype": "application/json",
  "id": "11823025758121791",
  "source": "//storage.googleapis.com/projects/_/buckets/li-test-intake",
  "specversion": "1.0",
  "subject": "objects/li_0722_test_file.txt",
  "time": "2024-07-23T00:33:01.793295Z",
  "type": "google.cloud.storage.object.v1.finalized"
}'
```


## Integration Test with GCloud

```
gcloud auth application-default login
```

* Deploy a Cloud Function

[//]: # (todo: fix the deployment script and permission)
```shell
gcloud functions deploy li-nodejs-event-driven-function \
--gen2 \
--runtime=nodejs20 \
--region=us-central1 \
--source=. \
--entry-point=entry \
--memory=512MB \
--trigger-event=google.storage.object.finalize
```


* Get a Cloud Function uri
```shell
gcloud functions describe li-nodejs-event-driven-function --gen2 --region us-central1 --format="value(serviceConfig.uri)"
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
gcloud functions delete nodejs-event-driven-function --gen2 --region us-central1
```

## Reference
https://github.com/GoogleCloudPlatform/cymbal-eats/blob/main/cloud-functions/thumbnail/index.js
