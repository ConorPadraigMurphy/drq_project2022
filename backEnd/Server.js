const express = require('express')
const app = express()
const port = 4000
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//For use when built
// const path = require('path');
// app.use(express.static(path.join(__dirname, '../build')));
// app.use('/static', express.static(path.join(__dirname, 'build//static')));

const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
main().catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.h4quo3n.mongodb.net/?retryWrites=true&w=majority');
}

const vechDetails = new mongoose.Schema({
  vechModel: String,
  problem: String,
  owner: String,
  contactNum: String,
  reg: String
});

const MechJournal = mongoose.model('mechanicsjournals', vechDetails);

app.post('/api/Jobs', (req, res) => {
  console.log(req.body)

  MechJournal.create({
    vechModel: req.body.vechModel,
    problem: req.body.problem,
    owner: req.body.owner,
    contactNum: req.body.contactNum,
    reg: req.body.reg

  })

  res.send('Data Recieved');
})

app.get('/api/Jobs', (req, res) => {

  MechJournal.find((error, data) => {
    res.json(data);

  })
})

