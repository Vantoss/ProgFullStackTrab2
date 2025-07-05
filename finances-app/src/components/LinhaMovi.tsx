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
    return(
        <>
            <tr className='linha' key={movi.id}>
                <td hidden className='idmovi'> {movi.id} </td>
                <td> {movi.nome} </td>
                <td> {movi.categoria} </td>
                <td> {convertData(movi.data)} </td>
                <td style={{color:"red"}}>{"(-)" + convertValor(movi.valor) }</td>
                <td><button type='submit' id='editard' className='btn btn-success' data-bs-toggle='modal' data-bs-target='#edmmodal' /*onclick='autofillputMovi(`" + movi.id + "`,`" + movi.nome + "`,`" + movi.categoria + "`,`" + movi.data + "`,`" + movi.valor + "`,`" + movi.tipo + "`)'*/>Editar</button></td>
                <td><button type='submit' id='apagard' className='btn btn-success' data-bs-toggle='modal' data-bs-target='#apmmodal'/*onclick='autofilldelMovi(`" + movi.id + "`)' */>Apagar</button></td>
            </tr>
        </>
    )
}