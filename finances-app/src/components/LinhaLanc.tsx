export default function LinhaLanc({lanc}: any){
    function convertData(data: string){
        var d = new Date(data);
        var newd = d.toLocaleDateString();
        return newd;
    }
    function convertValor(valor: number){
        var newv = Number(valor).toLocaleString("pt-BR",{style:"currency", currency:"BRL"});
        return newv
    }
    function autofillputLanc(id:any, nome:any, cat:any, val:any, valor:any){
        document.getElementById("idputf").value = id;
        document.getElementById("nomeputf").value = nome;
        document.getElementById("catputf").value = cat;
        document.getElementById("validadeput").value = val;
        document.getElementById("valorputf").value = valor;
    }
    function autofilldelLanc(id:any){
        document.getElementById("iddelf").value = id;
    }
    return(
        <>
            <tr className='linha' key={lanc.id}>
                <td hidden className='idlanc'> {lanc.id} </td>
                <td> {lanc.nome} </td>
                <td> {lanc.categoria} </td>
                <td> {convertData(lanc.prazo)} </td>
                <td>{convertValor(lanc.valor) }</td>
                <td><button type='submit' id='editarl' className='btn btn-success' data-bs-toggle='modal' data-bs-target='#edfmodal' onClick={()=>autofillputLanc( lanc.id , lanc.nome , lanc.categoria , new Date(lanc.prazo).toISOString().substring(0,10) , lanc.valor )}>Editar</button></td>
                <td><button type='submit' id='apagarl' className='btn btn-success' data-bs-toggle='modal' data-bs-target='#apfmodal' onClick={()=>autofilldelLanc( lanc.id )}>Apagar</button></td>
            </tr>
        </>
    )
}