import axios from "axios";

async function getMovi(){
    const url = "http://localhost:3000/api/movimentacoes/"
    const response = await axios.get(url)
    //console.log(response.data)
    return response.data
}

async function getLanc(){
    const url = "http://localhost:3000/api/lancamentos/"
    const response = await axios.get(url)
    //console.log(response.data)
    return response.data
}

export default{
    getMovi,
    getLanc
}