export default function LinhaMovi({movi}: any){
    function convertData(data: string){
        var d = new Date(data);
        var newd = d.toLocaleDateString();
        return newd;
    }
    function convertValor(valor: number){
        var newv = Number(valor).toLocaleString("pt-BR",{style:"currency", currency:"BRL"});
        return newv
    }
    function autofillputMovi(id:any, nome:any, cat:any, data:any, valor:any, tipo:any){
        document.getElementById("idputm").value = id;
        document.getElementById("nomeputm").value = nome;
        document.getElementById("categoriaput").value = cat;
        document.getElementById("dataput").value = data;
        document.getElementById("valorputm").value = valor;
        document.getElementById("tipoput").value = tipo;
    }
    function autofilldelMovi(id:any){
        document.getElementById("iddelm").value = id;
    }
    function tipo(tipo:any){
        if (tipo == "Despesa"){
            return(<td style={{color:"red"}}>{"(-)" + convertValor(movi.valor) }</td>)
        } else{
            return(<td style={{color:"green"}}>{"(+)" + convertValor(movi.valor) }</td>)
        }
    }
    return(
        <>
            <tr className='linha' key={movi.id}>
                <td hidden className='idmovi'> {movi.id} </td>
                <td> {movi.nome} </td>
                <td> {movi.categoria} </td>
                <td> {convertData(movi.data)} </td>
                {tipo(movi.tipo)}
                <td><button type='submit' id='editard' className='btn btn-success' data-bs-toggle='modal' data-bs-target='#edmmodal' onClick={()=>autofillputMovi( movi.id , movi.nome , movi.categoria , new Date(movi.data).toISOString().substring(0,10) , movi.valor , movi.tipo )}>Editar</button></td>
                <td><button type='submit' id='apagard' className='btn btn-success' data-bs-toggle='modal' data-bs-target='#apmmodal'onClick={()=>autofilldelMovi(movi.id)}>Apagar</button></td>
            </tr>
        </>
    )
}