function createWords(j){
    var label = document.createElement('label');

    label.innerText = j;

    //label.id = 'lbl' + key;

    document.body.appendChild(label);
}

function forsum(){
    const words = ['HELLO', 'WELCOME', 'NEW', 'WORLD', 'HOW ARE YOU?'];

    for (latters of words) {
        createWords(latters);
    }
}


//---------------------------------------------------------------------------------------
function createNum(adi,dm) {
    var label = document.createElement('label');

    label.innerText = adi + '=' + dm + '\n';

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

// function today(str) {
//     let count = ['a','e','i','o','u'];
//     for (let char in str)
//     {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            
//         }
//     }
//     createwords( count ) ;
// }

//------------------------------------------------------------------------------

//push
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

 //pop
 let dress =["Sfari","Saree","Kurti","Shirt","T Shirt","top","Salwar","Anarkali"];
 function popArray(){
    
    dress.pop();
    dress.pop();

    for(abc of dress){
        createNum(abc) ;
    }
 }

 //----------------------------------------------------------------------------

 //sort
 function sortArray(){
    dress.sort();

    for(you of dress){
        createWords(you);
    }
 }

 //--------------------------------------------------------------------------

 //reverse
 function reverseArray(){
    dress.reverse();

    for(tum in dress){
        createNum(tum ,dress[tum]);
      //  createNum(dress[tum]);
    }
 }

//----------------------------------------------------------------------

//decending : It arrange the array in descending order.
//            first we use SORT and then apply REVERSE after sorting. 
function decendingArray(){
    dress.sort().reverse();

    for(abc of dress){
        createWords  (abc);
    }

}

//-------------------------------------------------------------------

//merge
let wear = ['new', 'old'];

function margeArray(){
    let mArray = dress.concat(wear);
    for( k of mArray){
        createWords(k);
    }
}

//-----------------------------------------------------------------

//splice

function spliceArray(){

    dress.splice(3,2);

    for(M of dress){
        createWords(M);
    }
}
//------------------------------------------------------------------

//update

function updateArray(){
    dress[7] = 'sold out';

    for(s of dress){
        createWords(s);
    }
}

//--------------------------------------------------------------

//slice

function sliceArray(){
    dress.slice(3,4);

    for(S of dress){
        createWords(S);
    }
}

//----------------------------------------------------------------

//join

function joinArray(){
    
    let text = dress.join(' and ');

    for(joi of text){
        createWords(joi);
        }
}

//----------------------------------------------------------------              
