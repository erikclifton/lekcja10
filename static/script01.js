/*var index=0;
function add(){
    if(document.getElementById("check1").checked){
        console.log('1 tak')
    }else{
        console.log('1 nie')
    }
    if(document.getElementById("check2").checked){
        console.log('2 tak')
    }else{
        console.log('2 nie')
    }
    if(document.getElementById("check3").checked){
        console.log('3 tak')
    }else{
        console.log('3 nie')
    }
    if(document.getElementById("check4").checked){
        console.log('4 tak')
    }else{
        console.log('4 nie')
    }

    

/*const coll1 = new Datastore({
    filename: 'kolekcja.db',
    autoload: true
});*//*
let obj = {
    ub: document.getElementById("check1").checked ? "TAK" : "NIE",
    be: document.getElementById("check2").checked ? "TAK" : "NIE",
    us: document.getElementById("check3").checked ? "TAK" : "NIE",
    n4: document.getElementById("check4").checked ? "TAK" : "NIE"
 }
const doc = {
    id: index,
    ube: obj.ub,
    ben: obj.be,
    usz: obj.us,
    na4: obj.n4,
};
index++;
/*coll1.insert(doc, function (err, newDoc) {
    console.log("dodano dokument (obiekt):")
    console.log(newDoc)
    console.log("losowe id dokumentu: "+newDoc._id)
});*//*
document.getElementById("tableData").innerHTML+="<tr><td>"+doc.id+"</td><td>"+doc.ube+"</td><td>"+doc.ben+"</td><td>"+doc.usz+"</td><td>"+doc.na4+"</td><td>edit</td><td>delete</td></tr>"
}*/