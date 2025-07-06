import axios from "axios";

async function getMovi(){
    const url = "http://localhost:3000/api/movimentacoes/"
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

async function putMovi(movi: any, id: any){
    const url = "http://localhost:3000/api/movimentacoes/:" + id
    const response = await axios.put(url, movi)
    if(response.status == 201){
        return response.status
    } else{
        throw("Algo deu errado")
    }
}

async function delMovi(id: any){
    const url = "http://localhost:3000/api/movimentacoes/:" + id
    const response = await axios.delete(url)
    if(response.status == 201){
        return response.status
    } else{
        throw("Algo deu errado")
    }
}

async function getLanc(){
    const url = "http://localhost:3000/api/lancamentos/"
    const response = await axios.get(url)
    //console.log(response.data)
    return response.data
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

async function putLanc(lanc: any, id: any){
    const url = "http://localhost:3000/api/lancamentos/:" + id
    const response = await axios.put(url, lanc)
    if(response.status == 201){
        return response.status
    } else{
        throw("Algo deu errado")
    }
}

async function delLanc(id: any){
    const url = "http://localhost:3000/api/lancamentos/:" + id
    const response = await axios.delete(url)
    if(response.status == 201){
        return response.status
    } else{
        throw("Algo deu errado")
    }
}

async function getUser(){
    const url = "http://localhost:3000/api/users/"
    const response = await axios.get(url)
    //console.log(response.data)
    return response.data
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

async function putUser(user: any, id: any){
    const url = "http://localhost:3000/api/users/:" + id
    const response = await axios.put(url, user)
    if(response.status == 201){
        return response.status
    } else{
        throw("Algo deu errado")
    }
}

async function delUser(id: any){
    const url = "http://localhost:3000/api/users/:" + id
    const response = await axios.delete(url)
    if(response.status == 201){
        return response.status
    } else{
        throw("Algo deu errado")
    }
}

export default{
    getMovi,
    insertMovi,
    putMovi,
    delMovi,
    getLanc,
    insertLanc,
    putLanc,
    delLanc,
    getUser,
    insertUser,
    putUser,
    delUser
}