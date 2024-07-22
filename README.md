# Mono repo for cloud functions

## Basic requirement
Each function should
* Be independent with each other
* Can be deploy separately
* Have unit test
* Have integration test


## Examples in plan
* cloud function triggered by http
* cloud function triggered by event
* cloud function in nodeJS
* cloud function in Java


## Question
* Is Springboot a must-have framework for cloud function?


## Nice to have
* example for ci pipeline

## Troubleshooting

* `gcloud crashed (AttributeError): 'NoneType' object has no attribute 'dockerRepository'`

To fix this issue, please update gcloud to ite latest version with `gcloud components update`

