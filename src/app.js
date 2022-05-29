const express = require("express");
const path = require("path");
const app =express();
const hbs = require("hbs");
const port = process.env.PORT || 8000;
const staticPath = path.join(__dirname,"../public");
const viewPath = path.join(__dirname,"../templates/views");
const partialPath = path.join(__dirname,"../templates/partials");
app.set("views",viewPath);
app.set("view engine","hbs");
app.use(express.static(staticPath));
hbs.registerPartials(partialPath)

app.get("",(req,res)=>{
    res.render("index");
})
app.get("/weather",(req,res)=>{
    res.render("weather");
})
app.get("/about",(req,res)=>{
    res.render("about");
})
app.get("*",(req,res)=>{
    res.render("404");
})

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
});
