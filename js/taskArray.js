function lblcreate(jp){
    var label = document.createElement('label');

    label.innerText = jp + '\n';

    document.body.appendChild(label);
}
let yourArray = [];

function createtask(){
    let avni = document.getElementById("capital").value;

    yourArray.push(avni);
    lblcreate(avni);

    // for(let words of yourArray){
    //     lblcreate(words);
    // }      
            
}
function popArray(){
    let avni = document.getElementById("capital").value;

    for(let x of yourArray ){
        lblcreate(x);
    }
    yourArray .pop(avni);
}