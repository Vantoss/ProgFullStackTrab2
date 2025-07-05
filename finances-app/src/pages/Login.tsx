

export default function Login(){

    return(
        <>
            <h1 className="mt-4">Faça seu login</h1>

            <div className="container mx-auto mt-4" id="login">
                <div className="row">
                    <div className="containerlogin col rounded"> 
                        <label>Nome:</label>
                        <input type="text" name="nomelog" id="nomelog" placeholder="" required/><br/>
                        <label>Senha:</label>
                        <input type="password" name="senhalog" id="senhalog" placeholder="" required/><br/>
                        <button id="enviar "type="submit" className="btn btn-success" /*onClick={login()} */>Enviar</button>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-5 mx-auto">
                        <p>Não tem uma conta ainda? <a id="cadtext" data-bs-toggle='modal' data-bs-target='#cadusermodal' href="">Crie uma.</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}