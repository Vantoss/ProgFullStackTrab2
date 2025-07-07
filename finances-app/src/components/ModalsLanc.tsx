import DBService from "../service/DBService"

export default function ModalsLanc(){
    function cadLanc(){
        var nome = document.forms["formfixo"]["nome"].value;
        var cat = document.forms["formfixo"]["categoria"].value;
        var prazo = document.forms["formfixo"]["validade"].value;
        var valor = document.forms["formfixo"]["valor"].value;
        const novoLanc = {
            "nome": nome,
            "categoria": cat,
            "prazo": prazo,
            "valor": valor
        };
        DBService.insertLanc(novoLanc).then(()=>{
            window.alert("Lançamento cadastrado com sucesso!")   
        });
    }
    function putLanc(){
        var id = document.forms["formfixoput"]["idputf"].value;
        var nome = document.forms["formfixoput"]["nomeputf"].value;
        var cat = document.forms["formfixoput"]["catputf"].value;
        var prazo = document.forms["formfixoput"]["validadeput"].value;
        var valor = document.forms["formfixoput"]["valorputf"].value;
        const novoLanc = {
            "nome": nome,
            "categoria": cat,
            "prazo": prazo,
            "valor": valor
        };
        DBService.putLanc(novoLanc, id).then(()=>{
            window.alert("Lançamento atualizado com sucesso!")   
        });
    }
    function delLanc(){
        var id = document.forms["formfixodel"]["iddelf"].value;
        DBService.delLanc(id).then(()=>{
            window.alert("Lançamento apagado com sucesso!")
        })
    }
    
    return(
        <>
            <div className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" id="cadfmodal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Cadastrar Lançamento</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            <form id="formfixo">
                                <label>Nome:</label><br/>
                                <input type="text" name="tipoc" id="nome" placeholder="(Luz, água, parcela...)" required/><br/>
                                <label>Categoria:</label><br/>
                                <select name="categoriaf" id="categoria">
                                    <option value="Moradia">Moradia</option>
                                    <option value="Alimentação">Alimentação</option>
                                    <option value="Lazer">Lazer</option>
                                    <option value="Saúde">Saúde</option>
                                    <option value="Educação">Educação</option>
                                    <option value="Transporte">Transporte</option>
                                    <option value="Trabalho">Trabalho</option>
                                </select><br/>
                                <label>Validade:</label><br/>
                                <input type="date" name="validade" id="validade" placeholder="Prazo" required/><br/>
                                <label>Valor:</label><br/>
                                <input type="number" name="valorc" id="valor" placeholder="Valor" required/>
                            </form>
                        </div>

                        <div className="modal-footer">
                            <button type="submit" className="btn btn-success" id="enviar" onClick={cadLanc} data-bs-dismiss="modal">Cadastrar</button>
                            <button type="button" className="btn btn-secondary" /*onclick="document.getElementById('formLanc').reset()"*/ data-bs-dismiss="modal">Cancelar</button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" id="edfmodal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Editar lançamento</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            <form id="formfixoput">
                                <input hidden type="text" name="id" id="idputf" required/>
                                <label>Nome:</label><br/>
                                <input type="text" name="tipoc" id="nomeputf" placeholder="(Luz, água, parcela...)" required/><br/>
                                <label>Categoria:</label><br/>
                                <select name="categoriam" id="catputf">
                                    <option value="Moradia">Moradia</option>
                                    <option value="Alimentação">Alimentação</option>
                                    <option value="Lazer">Lazer</option>
                                    <option value="Saúde">Saúde</option>
                                    <option value="Educação">Educação</option>
                                    <option value="Transporte">Transporte</option>
                                    <option value="Trabalho">Trabalho</option>
                                </select><br/>
                                <label>Validade:</label><br/>
                                <input type="date" name="validade" id="validadeput" placeholder="Prazo" required/><br/>
                                <label>Valor:</label><br/>
                                <input type="number" name="valorc" id="valorputf" placeholder="Valor" required/>
                            </form>
                        </div>

                        <div className="modal-footer">
                            <button type="submit" className="btn btn-success" id="enviar" onClick={putLanc} data-bs-dismiss="modal">Salvar</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" id="apfmodal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Apagar Lançamento</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            <p>Você tem certeza que quer apagar este lançamento?</p>
                            <form id="formfixodel">
                                <input hidden type="text" name="id" id="iddelf" required/>                       
                            </form>
                        </div>

                        <div className="modal-footer">
                            <button type="submit" className="btn btn-success" id="enviar" onClick={delLanc} data-bs-dismiss="modal">Apagar</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}