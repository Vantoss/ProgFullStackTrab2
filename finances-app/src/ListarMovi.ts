//VER QUESTÃO DO CORS
const url = "http://localhost:3000/api/movimentacoes/"

async function getMovi(){
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onload = function(){
        console.log(this.responseText)
    }

    xmlhttp.open("GET", url, true);
    //xmlhttp.setRequestHeader("*", "Access-Control-Allow-Origin");
    xmlhttp.send();
}

export default{
    getMovi
}