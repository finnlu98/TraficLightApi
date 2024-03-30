
const express = require('express'); 
 
var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var Green = new Gpio(17, 'out'); //use GPIO pin 4, and specify that it is output
var Orange = new Gpio(27, 'out'); //use GPIO pin 4, and specify that it is output
var Red = new Gpio(22, 'out'); //use GPIO pin 4, and specify that it is output


const app = express();


app.get('/off', (req, res) => {

    
    Green.writeSync(1);
    Orange.writeSync(0);
    Red.writeSync(0);
    
  
    res.send("success");

});


app.get('/green', (req, res) => {

    
    Green.writeSync(1);
    Orange.writeSync(0);
    Red.writeSync(0);
    

    res.send("success");

});

app.get('/orange', (req, res) => {
    
    Green.writeSync(0);
    Orange.writeSync(1);
    Red.writeSync(0);
    
    
    res.send("success");

});

app.get('/red', (req, res) => {
    
    Green.writeSync(0);
    Orange.writeSync(0);
    Red.writeSync(1);
    
  
    res.send("success");

});


// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

