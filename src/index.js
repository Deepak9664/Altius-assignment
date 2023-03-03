const express=require('express');
const bodyParser = require('body-parser');
 const multer=require('multer');
 const route = require('./routes/route.js');
const mongoose  = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(multer().any());

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://Deepak1234:TrU8MdmpPJ72rGI3@cluster0.l1wlrcl.mongodb.net/test",{
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )



 app.use('/', route);


app.listen(process.env.PORT || 3001, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3001))
});