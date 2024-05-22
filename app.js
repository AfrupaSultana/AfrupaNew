const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 8000;

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); //for serving static files
app.use(express.urlencoded())
    //PUG SPECIFIC STUFF
app.set('view engine', 'pug'); //Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) //Set the views directory


//ENDPOINTS
app.get('/', (req, res) => {

    const params = {};
    res.status(200).render('home.pug', params);
})
app.get('/contact', (req, res) => {

    const params = {};
    res.status(200).render('contact.pug', params);
})
app.post('/contact', (req, res) => {
    name = req.body.name
    phone = req.body.phone
    email = req.body.email
    address = req.body.address
    desc = req.body.desc
    let outputToWrite = `
     The name of the client is : ${name}
     Phone number :${phone}
     Email : ${email} 
     Residing at : ${address}
     His/Her concern : ${desc}`
    fs.writeFileSync('contactsubmissionpage.txt', outputToWrite)
    const params = { 'message': 'Your form has been submitted succesfully' };
    res.status(200).render('newForm.pug', params);
})


app.get('/about', (req, res) => {

    const params = {};
    res.status(200).render('about.pug', params);
})
app.get('/classinfo', (req, res) => {

    const params = {};
    res.status(200).render('classinfo.pug', params);
})
app.get('/dresses', (req, res) => {

    const params = {};
    res.status(200).render('dresses.pug', params);
})
app.post('/dresses', (req, res) => {

    const params = {};
    res.status(200).render('dresses.pug', params);
})


app.get('/services', (req, res) => {

    const params = {};
    res.status(200).render('services.pug', params);
})

//START THE SERVER
app.listen(port, () => {
    console.log(`The application started succesfully on port ${port}`);
});