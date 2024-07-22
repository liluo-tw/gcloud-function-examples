const functions = require('@google-cloud/functions-framework');

functions.http('entry', (req, res) => {
    console.log(`Request body: ${JSON.stringify(req.body)}`);

    if (req.body.temp === undefined) {
        res.status(400);
        res.send('Temperature value not supplied in request.');
    }

    let ctemp = (req.body.temp - 32) * 5 / 9;
    res.send(`Temperature in Celsius is: ${ctemp.toFixed(2)}.`);
});