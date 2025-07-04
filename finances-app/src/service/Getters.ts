async function getMovi(){
    const url = "http://localhost:3000/api/movimentacoes/"
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onload = function(){
        console.log("Movimentações:", this.responseText)
    }

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

async function getLanc(){
    const url = "http://localhost:3000/api/lancamentos/"
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onload = function(){
        console.log("Lançamentos:", this.responseText)
    }

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

export default{
    getMovi,
    getLanc
}