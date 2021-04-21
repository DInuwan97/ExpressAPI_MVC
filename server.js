const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


//Import routes
const CustomerRoute = require('./Routes/Customer');
const AssignToDoRoute = require('./Routes/AssignToDo');
const AvailabilityRoute = require('./Routes/Availability');

//initialize middlewear
const app = express();


//body parser middlewear
app.use(bodyParser.json());



//get the mongodb url
const db = require("./config/keys").mongoURI;


//Connect to mongoose
mongoose
.connect(db,{
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false
})
.then(()=>console.log('MongoDB is connected'))
.catch(err => console.log(err));


//get routes from controllers
app.use("/api/customers",CustomerRoute)
app.use("/api/assigntodo",AssignToDoRoute)
app.use("/api/availability",AvailabilityRoute)

//Serve static assets if you are in production
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req,res)=>{
      res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}


const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));