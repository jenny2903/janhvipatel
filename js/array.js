function createWords(j) {
    var label = document.createElement('label');

    label.innerText = '\n' + j + '\n';

    document.body.appendChild(label);
}
function forsum() {
    const words = ['HELLO', 'WELCOME', 'NEW', 'WORLD', 'HOW ARE YOU?'];

    for (latters of words) {
        createWords(latters);
    }
}

//---------------------------------------------------------------------------------------
function createNum(adi) {
    var label = document.createElement('label');

    label.innerText = adi + '\n';

    //label.id = 'lbl' + key;

    document.body.appendChild(label);
}

function average() {
    let latters = [1, 2, 3, 4, 5]
    for (let key = 0; key <= 5; key++) {

        createNum(key);
    }

}

//----------------------------------------------------------------------------------

function today(str) {
    let count = ['a','e','i','o','u'];
    for (let char in str)
    {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            
        }
    }
    createwords( count ) ;
}

//------------------------------------------------------------------------------

 function array1(){
    const name = ['abc','def','ghi','jkl','mno','pqr'];

    name.push('stu','vwx');
    name.push('yz');
    

    for(xxx in name){
        createWords(xxx); 
        createWords(name[xxx]); 
    }
 }

 //------------------------------------------------------------------------------
 let dress =["sfari","saree","kurti","shirt","T shirt","top","salwar"];
 function popArray(){
    
    dress.pop();
    dress.pop();

    for(abc of dress){
        createNum(abc) ;
    }
 }