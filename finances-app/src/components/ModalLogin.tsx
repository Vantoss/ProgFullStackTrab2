import DBService from "../service/DBService";

export default function ModalLogin(){
    function cadastrar(){
        var nome = document.forms["cadform"]["nomecad"].value;
        var senha = document.forms["cadform"]["senhacad"].value;
        const novoUser = {"nome": nome, "senha": senha};
        DBService.insertUser(novoUser).then(()=>{
            window.alert("Usuário cadastrado com sucesso!");
            window.location.href = "/movimentacoes"; //Ver pq que isso buga o app.
        });
    }
    return(
        <div className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" id="cadusermodal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">

                <div className="modal-header">
                    <h4 className="modal-title">Cadastrar Usuário</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div className="modal-body">
                    <form id="cadform" method="POST">
                        <label>Nome:</label><br/>
                        <input type="text" name="nomecad" id="nomecad" placeholder="" required/><br/>
                        <label>Senha:</label><br/>
                        <input type="password" name="senhacad" id="senhacad" placeholder="" required/>   
                    </form>
                </div>

                <div className="modal-footer">
                    <button type="submit" className="btn btn-success" id="enviar" data-bs-dismiss="modal" onClick={cadastrar}>Cadastrar usuário</button>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                </div>

                </div>
            </div>
        </div>    
    )
}