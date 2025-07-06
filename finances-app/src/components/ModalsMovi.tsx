import DBService from "../service/DBService";

export default function ModalsMovi(){
    function cadMovi(){
        var nome = document.forms["formmovi"]["nome"].value;
        var cat = document.forms["formmovi"]["categoria"].value;
        var data = document.forms["formmovi"]["data"].value;
        var valor = document.forms["formmovi"]["valor"].value;
        var tipo = document.forms["formmovi"]["tipo"].value;
        const novaMovi = {
            "nome": nome,
            "categoria": cat,
            "data": data,
            "valor": valor,
            "tipo": tipo
        };
        DBService.insertMovi(novaMovi).then(()=>{
            window.alert("Movimentação cadastrada com sucesso!")   
        });
    }
    function putMovi(){
        //Implementar
    }
    function delMovi(){
        //Implementar
    }
    return(
        <>
            <div className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" id="cadmmodal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Registrar movimentação</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            <form id="formmovi">
                                <label>Nome:</label><br/>
                                <input type="text" name="nomem" id="nome" placeholder="(Supermercado, gasolina...)" required/><br/>
                                <label>Categoria:</label><br/>
                                <select name="categoriam" id="categoria">
                                    <option value="Moradia">Moradia</option>
                                    <option value="Alimentação">Alimentação</option>
                                    <option value="Lazer">Lazer</option>
                                    <option value="Saúde">Saúde</option>
                                    <option value="Educação">Educação</option>
                                    <option value="Transporte">Transporte</option>
                                    <option value="Trabalho">Trabalho</option>
                                </select><br/>
                                <label>Data:</label><br/>
                                <input type="date" name="datam" id="data" placeholder="Data" required/><br/>
                                <label>Valor:</label><br/>
                                <input type="number" name="valorm" id="valor" placeholder="" required/><br/>
                                <label>Despesa ou receita?</label><br/>
                                <select name="tipom" id="tipo">
                                    <option value="Despesa">Despesa</option>
                                    <option value="Receita">Receita</option>
                                </select>
                            </form>
                        </div>

                        <div className="modal-footer">
                            <button type="submit" className="btn btn-success" id="enviar" onClick={cadMovi} data-bs-dismiss="modal">Cadastrar</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" id="edmmodal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Editar Movimentação</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            <form id="formmoviput">
                                <input hidden type="text" name="id" id="idputm" required/>
                                <label>Nome:</label><br/>
                                <input type="text" name="nomem" id="nomeputm" placeholder="(Supermercado, gasolina...)" required/><br/>
                                <label>Categoria:</label><br/>
                                <input type="text" name="categoriam" id="categoriaput" placeholder="(Lazer, alimentação...)" required/><br/>
                                <label>Data:</label><br/>
                                <input type="date" name="datam" id="dataput" placeholder="Data" required/><br/>
                                <label>Valor:</label><br/>
                                <input type="number" name="valorm" id="valorputm" placeholder="" required/><br/>
                                <label>Despesa ou receita?</label><br/>
                                <select name="tipom" id="tipoput">
                                    <option value="Despesa">Despesa</option>
                                    <option value="Receita">Receita</option>
                                </select>
                            </form>
                        </div>

                        <div className="modal-footer">
                            <button type="submit" className="btn btn-success" id="enviar" onClick={putMovi} data-bs-dismiss="modal">Salvar</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" id="apmmodal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Apagar Movimentação</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body">
                            <p>Você tem certeza que quer apagar essa movimentação?</p>
                            <form id="formmovidel">
                                <input hidden type="text" name="id" id="iddelm" required/>                  
                            </form>
                        </div>

                        <div className="modal-footer">
                            <button type="submit" className="btn btn-success" id="enviar" onClick={delMovi} data-bs-dismiss="modal">Apagar</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}