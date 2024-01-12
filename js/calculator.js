
function calculator(options) {
    const a = Number(document.getElementById("firstbox").value);
    const b = Number(document.getElementById("secondbox").value);

    switch (options) {
        case 'addition':
            document.getElementById("lblcreate").innerText = a + b;
            break;
        case 'subtrction':
            document.getElementById("lblcreate").innerText = a - b;
            break;
        case 'multipication':
            document.getElementById("lblcreate").innerText = a * b;
            break;
        case 'division':
            document.getElementById("lblcreate").innerText = a / b;
            break;
        default:
            alert("not worked");
            break;
    }
}

//-------------------------------------------------------
/*
function lablecreate(jp) {
    let main = document.createElement('lable');

    main.innerText = jp;

    //main.id = "lbl" + az ;

    document.body.appendChild(main);
}

function calculator2(choice) {
    let c = Number(document.getElementById('value a').value);
    let d = Number(document.getElementById('value b').value);

    if (choice == 'add') {
        lablecreate(c + d);
    }
    else if (choice == 'subt') {
        lablecreate(c - d);
    }
    else if (choice == 'multi') {
        lablecreate(c * d);
    }
    else if (choice == 'div') {
        lablecreate(c / d);
    }
    else {
        alert("invalid input")
    }

}*/