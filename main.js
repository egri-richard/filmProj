class Film{
    constructor(nev, hosszPerc){
        this.nev = nev;
        this.hosszPerc = hosszPerc;
    }

    toString() {
        return (`${this.nev} (${this.hosszPerc})`);
    }

    get hosszOra() {
        return (this.hosszPerc/60).toFixed(2);
    }
}

let filmArr = [];

function checkType(){
    let nevIn = document.getElementById('nevInput').value;
    let nevCheck = true;
    let hopeIn = parseInt(document.getElementById('hosszPercInput').value);
    let hopeCheck = true;
    

    if(typeof nevIn != "string") { 
        nevCheck = false; 
        console.log("Wrong type for nev") 
    }

    if(typeof hopeIn != "number") { 
        hopeCheck = false; 
        console.log("Wrong type for hosszPerc")
    }

    if(nevCheck == true && hopeCheck == true) addFilm(nevIn, hopeIn); 
}

function addFilm(nev, hosszPerc) {
    let f = new Film(nev, hosszPerc);
    filmArr.push(f);
}