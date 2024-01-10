function lblcreate(jp) {
    var label = document.createElement('label');

    label.innerText = '\n' + jp + '\n';

    document.body.appendChild(label);
}
let yourArray = [];

function createtask() {
    let avni = document.getElementById("capital").value;

    yourArray.push(avni);
    lblcreate(avni);

    // for(let words of yourArray){
    //     lblcreate(words);
    // }      

}

function popArray() {
    //let avni = document.getElementById("capital").value;

    yourArray.pop();
    for (let x of yourArray) {
        lblcreate(x);
    }

}

 

//--------------------------------------------------------------

//array in while

let capital = ['Animal', 'Avenger', 'Area', 'Always'];


function whileArray() {
    try{
    let jp = 0;
    capital.push('non');
    while (jp < capital.length) {
        lblcreate7(capital[jp]);
        jp++;
    }
    throw('not find');
      }
      catch(hg){
        lblcreate(hg);
      }

}

//----------------------------------------------------------------

let price = [];

function callSubmit(){
    let custom = document.getElementById("small").value;
    
    let j = 0;
    price.push(custom);
    while(j < price.length){
        lblcreate(price[j]);
        j++;
    }
}

function callRemove(){
    let j = 0;

    price.pop();
    while(j < price.length){
        lblcreate(price[j]);
        j++;
    }
}

function callDesending(){
    let j = 0;

    
}