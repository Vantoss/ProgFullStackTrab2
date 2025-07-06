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

async function getUser(){
    const url = "http://localhost:3000/api/users/"
    const response = await axios.get(url)
    //console.log(response.data)
    return response.data
}

async function insertMovi(movi: any){
    const url = "http://localhost:3000/api/movimentacoes/"
    const response = await axios.post(url, movi)
    if(response.status == 201){
        return response.status
    } else{
        throw("Algo deu errado")
    }
}

async function insertLanc(lanc: any){
    const url = "http://localhost:3000/api/lancamentos/"
    const response = await axios.post(url, lanc)
    if(response.status == 201){
        return response.status
    } else{
        throw("Algo deu errado")
    }
}

async function insertUser(user: any){
    const url = "http://localhost:3000/api/users/"
    const response = await axios.post(url, user)
    if(response.status == 201){
        return response.status
    } else{
        throw("Algo deu errado")
    }
}

export default{
    getMovi,
    insertMovi,
    getLanc,
    insertLanc,
    getUser,
    insertUser
}