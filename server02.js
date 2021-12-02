const Datastore = require('nedb')
const coll1 = new Datastore({
    filename: 'kolekcja.db',
    autoload: true
});
var path = require("path")
var express = require("express")
var app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.static('static'))
const PORT = process.env.PORT || 3000;
var handlebars = require('express-handlebars');

var handlebars = require('express-handlebars');
app.set('views', path.join(__dirname, 'views'));         // ustalamy katalog views
app.engine('handlebars', handlebars({ defaultLayout: 'main.handlebars' }));   // domyślny layout, potem można go zmienić
app.set('view engine', 'handlebars');    


app.get("/", function (req, res) { 
    //res.render('view01.handlebars');   // nie podajemy ścieżki tylko nazwę pliku
    //res.render('view01.handlebars', { layout: "main.handlebars" }); // opcjonalnie podajemy konkretny layout dla tego widoku
    
    coll1.find({ }, function (err, placki) {
        //zwracam dane w postaci JSON
        console.log("----- tablica obiektów pobrana z bazy: \n")
        console.log(placki)
        console.log("----- sformatowany z wcięciami obiekt JSON: \n")
        console.log(JSON.stringify({ "placki": placki }, null, 5))
        res.render('view01.handlebars', {'placki':placki});
    });
    
})
var index=0;

app.get("/del", function(req,res){
    coll1.remove({_id:req.query.pomidor }, {}, function (err, numRemoved) {
        console.log("usunięto dokumentów: ",numRemoved)
        res.redirect("/")
    });
})
app.post("/add", function(req,res){
console.log(req.body)

let obj = {
    ub: req.body.check1=='on' ? "TAK" : "NIE",
    be: req.body.check2=='on' ? "TAK" : "NIE",
    us: req.body.check3=='on' ? "TAK" : "NIE",
    n4: req.body.check4=='on' ? "TAK" : "NIE",
 }
const doc = {
    ube: obj.ub,
    ben: obj.be,
    usz: obj.us,
    na4: obj.n4,
};
coll1.insert(doc, function (err, newDoc) {
    console.log("dodano dokument (obiekt):")
    console.log(newDoc)
    console.log("losowe id dokumentu: "+newDoc._id)
    res.redirect("/")
});
//req.body.tableData.innerHTML+="<tr><td>"+doc.id+"</td><td>"+doc.ube+"</td><td>"+doc.ben+"</td><td>"+doc.usz+"</td><td>"+doc.na4+"</td><td>edit</td><td>delete</td></tr>"
console.log(req.body)
})


/*
let obj = {
    a: x=="TAK" ? "TAK" : "NIE",
    b: y==2 ? "igrek równa się 2" : "igrek nie równa się dwa",
}*/

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT )
})
//do konsoli wpisz: node server02.js