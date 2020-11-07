const express = require('express')
const app = express()

const mustache = require('mustache-express')
app.engine('html', mustache())
app.set('view engine', 'html')

const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const admin = require('firebase-admin')
let serviceAccount = require('./key-firestore.json')
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

app.use(express.static('public'))

app.get('/', (req, res) => res.send('Online'))

app.get('/index', require('./controller/index'))

app.get('/clinic/:category', require('./controller/categoryClinic'))

//API
app.get('/api/clinicByCategory', require('./api/byCate'))

app.get('/api/allClinic', require('./api/allClinic'))


//LINE
app.post('/line', express.json(), require('./line'))

//upload
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});
var upload = multer({ storage: storage }).single('data');

app.post('/upload', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            // An error occurred when uploading
        }
        res.json({
            success: true,
            message: 'Upload complet!!!'
        });

        // Everything went fine
    })
});

//update data
app.get('/update', express.json(), require('./updateData'))
app.get('/updateOnline', express.json(), require('./updateDataOnline'))

//export data yes no
app.get('/export', require('./export'))

module.exports = app