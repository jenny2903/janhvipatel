function buttoncr(){
    var butt = document.createElement('button');

    var buttTextNode = document.createTextNode("This is Button");
    
    butt.appendChild(buttTextNode);

    butt.value = fortable();

    document.body.appendChild(butt);
 
}
function fortable(){
    a = 1;
     for (a = 1; a <= 10; a++) {
        var dothis = 5 * a;
        console.log("5 * " + a + " = " + dothis);
     }

}

function forloop(){
     
     for (let s = 1; s <= 15; s++) {
         console.log("janhvi");
    }
}
 function forinloops(){
    const months = ["january", "february", "march", "april", "may", "june", "july", "august", "suptembre", "octomber", "november", "december"];

    let know = {Name: 'janhvi',Age: '23',}
    
    for (const j in months) {
       console.log(j);
       console.log(months[j]);
    }
    for (let y in know) {
        console.log(y);
       console.log(know[y]);

    }

}
function forofloops(){

    let xyz = "IAMSTUDENT";
    for(let i of xyz){
       console.log(i);
    }
}
function dowhile(){

   let w = 0;
   do{
    console.log("jenny");
    w++;

   }while(w <= 5);

}