// let a ;
// let b ;

function calculator(options){
    const a = Number(document.getElementById("firstbox").value);
    const b = Number(document.getElementById("secondbox").value);

    switch(options) {
       case 'addition':
        document.getElementById("lblcreate").innertext = a + b;
        break;
        case 'subtrction':
            document.getElementById("lblcreate").innertext = a - b;
            break;
        case 'multipication':
                document.getElementById("lblcreate").innertext = a * b;
                break;
        case 'division':
                    document.getElementById("lblcreate").innertext = a / b;
                    break;
        default :
               alert("not worked");
               break;
    }
}