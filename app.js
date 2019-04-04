const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

var campgrounds = [
        {name: "Mandrem Goa Campsite", image: "https://lh5.googleusercontent.com/p/AF1QipNbwVWPn3bjIw6pRyWE3YoqUA8ENTXwXwJbT0KV=s786-k-no"},
        {name: "Parra Ground", image: "https://lh5.googleusercontent.com/p/AF1QipPIQdg0kHTTF8Vgiwoq3LogMPJ5tdRYfj75AiDY=s253-k-no"},
        {name: "Backwoods Camp", image: "https://lh5.googleusercontent.com/p/AF1QipMOVWcp57-Q79KKYSNtP5lAITPQwvXHD4oQ9D9r=w325-h218-n-k-no"}
        ] 

app.get("/", (req, res) => { // replace function with => arrow function in es6
    res.render("landing.ejs");
});

app.get("/campgrounds", (req, res) => {
    res.render("campgrounds.ejs", {campgrounds: campgrounds}); // {campgrounds: campgrounds} the contents of campgrounds is sent to campgrounds which is furthur used in campgrounds.ejs 
});


app.post("/campgrounds", (req, res) => {
    // getting data from the form and adding to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCamp = {name: name, image: image}
    campgrounds.push(newCamp);
    
    // redirecting back to campgrounds page
    res.redirect("/campgrounds");
});


app.get("/campgrounds/new", (req, res) => { // campgrounds/new will then send the data to the post route
    res.render("new.ejs");
});


app.listen(process.env.PORT, process.env.IP, function(){ // process.env.PORT, process.env.IP  - environmental viriables set up for cloud9 which we access
    console.log("Server started");
});