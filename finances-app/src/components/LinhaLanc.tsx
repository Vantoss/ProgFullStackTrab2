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
    return(
        <>
            <tr className='linha' key={lanc.id}>
                <td hidden className='idlanc'> {lanc.id} </td>
                <td> {lanc.nome} </td>
                <td> {lanc.categoria} </td>
                <td> {convertData(lanc.prazo)} </td>
                <td>{convertValor(lanc.valor) }</td>
                <td><button type='submit' id='editard' className='btn btn-success' data-bs-toggle='modal' data-bs-target='#edmmodal' /*onclick='autofillputMovi(`" + movi.id + "`,`" + movi.nome + "`,`" + movi.categoria + "`,`" + movi.data + "`,`" + movi.valor + "`,`" + movi.tipo + "`)'*/>Editar</button></td>
                <td><button type='submit' id='apagard' className='btn btn-success' data-bs-toggle='modal' data-bs-target='#apmmodal'/*onclick='autofilldelMovi(`" + movi.id + "`)' */>Apagar</button></td>
            </tr>
        </>
    )
}