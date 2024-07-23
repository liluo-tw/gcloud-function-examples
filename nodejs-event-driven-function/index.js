const functions = require('@google-cloud/functions-framework');
const fs = require('fs');
const {Storage} = require('@google-cloud/storage');
const path = require('path');

// Register a CloudEvent function with the Functions Framework
functions.cloudEvent('entry', async (cloudEvent) => {
    // Your code here
    // Access the CloudEvent data payload via cloudEvent.data
    console.log(`Event ID: ${cloudEvent.id}`);
    console.log(`Event Type: ${cloudEvent.type}`);
    const file = cloudEvent.data;
    console.log(`Received event for file ${file.name} from bucket ${file.bucket}`);

    //load file from intake bucket: please check permission
    // const temp_dir = "/tmp/files";
    // if (!fs.existsSync(temp_dir)) {
    //     fs.mkdirSync(temp_dir);
    // }
    // const storage = new Storage();
    // const tempFile = `${temp_dir}/${file.name}`;
    // const intakeBucket = storage.bucket(file.bucket);
    // await intakeBucket.file(file.name).download({
    //     destination: tempFile
    // });
    // console.log(`Downloaded file into ${tempFile}`);


    // todo: setup output bucket and write permission
    // const outputBucket = storage.bucket("li-test-output");
    // const fileUploaded = await outputBucket.upload(tempFile);
    // const fileUrl = fileUploaded[0].publicUrl();
    // console.log(`Uploaded file to Cloud Storage bucket li-test-output`);
});