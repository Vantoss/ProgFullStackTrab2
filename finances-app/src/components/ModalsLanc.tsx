export default function ModalsLanc(){
    
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
                                <label>Validade:</label><br/>
                                <input type="date" name="validade" id="validade" placeholder="Prazo" required/><br/>
                                <label>Valor:</label><br/>
                                <input type="number" name="valorc" id="valorconta" placeholder="Valor" required/>
                            </form>
                        </div>

                        <div className="modal-footer">
                            <button type="submit" className="btn btn-success" id="enviar" /*onclick="cadFixo()"*/ data-bs-dismiss="modal">Cadastrar</button>
                            <button type="button" className="btn btn-secondary" /*onclick="document.getElementById('formfixo').reset()"*/ data-bs-dismiss="modal">Cancelar</button>
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
                                <label>Validade:</label><br/>
                                <input type="date" name="validade" id="validadeput" placeholder="Prazo" required/><br/>
                                <label>Valor:</label><br/>
                                <input type="number" name="valorc" id="valorputf" placeholder="Valor" required/>
                            </form>
                        </div>

                        <div className="modal-footer">
                            <button type="submit" className="btn btn-success" id="enviar" /*onclick="putFixo()"*/ data-bs-dismiss="modal">Salvar</button>
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
                            <button type="submit" className="btn btn-success" id="enviar" /*onclick="delFixo()"*/ data-bs-dismiss="modal">Apagar</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}