function forloop() {
    for (let x = 1; x <= 100; x++) {
        console.log(x);
    }

}

function forloopdicriment() {
    for (let a = 100; a >= 1; a--) {
        console.log(a);
    }
}

function tryinloops(){
    try {
        const name = ["janhvi", "varsha", "nisha", "surbhi", "alisha"]

        for (let g = 0; g < name.length; g++) {
            console.log(name[g]);
        }
    }
    catch{
        console.log("error");
    }
    finally{
        console.log("finally");
    }
}