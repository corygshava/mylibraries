function copytext1(txt) {
    if(txt != "" || txt != undefined){
        let b = document.createElement('textarea');
        b.value = txt;
        document.body.appendChild(b);
        
        b.select()
        b.setSelectionRange(0,99000);

        try{
            let suc = document.execCommand('copy');
            console.log(suc ? "text copied" : "copying error occured!")
        } catch {
            alert("there was an error copying your text, please try again")
        }

        document.body.removeChild(b);
    }
}

function daysUntil(date) {
    let target = new Date(date).setHours(0, 0, 0, 0);
    let today = new Date().setHours(0, 0, 0, 0);
    let diff = (target - today) / (1000 * 60 * 60 * 24);

    if (diff < 0) return "passed";
    if (diff === 0) return "today";
    if (diff === 1) return "tomorrow";
    return `${diff} days remaining`;
}

function plural(wad,n) {
    if (n === 1) {
        res = wad;
    } else if (wad.endsWith('us')) {
        res = wad.slice(0, -2) + 'i';
    } else if (wad.endsWith('s')) {
        res = wad + 'es';
    } else if (wad.endsWith('y')) {
        res = wad.slice(0,-1) + 'ies';
    } else if (wad.endsWith('_')){
        res = wad.substr(0,wad.length - 1);
    }else {
        res = wad + 's';
    }

    return res;
}

function mekRandomString(charcount,useNums = true,useSymbols = false) {
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*()^~`";
    letters = useSymbols ? letters : letters.substr(0,26);

    let lettersLo = letters.toLowerCase();
    let nums = "1234578906";

    let options = letters + lettersLo;
    options += useNums ? nums : '';

    let res = '';
    let fin = [];

    for(let id = 0;id < charcount;id++){
        fin.push(options.split('')[Math.floor(Math.random() * options.length)]);
    };

    res = fin.join("");

    return res;
}