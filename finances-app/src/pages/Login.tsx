import { useNavigate } from "react-router";
import ModalLogin from "../components/ModalLogin"
import DBService from "../service/DBService";


export default function Login(){
    function login(){
        /*var nome = document.forms["loginform"]["nomelog"].value;
        var senha = document.forms["loginform"]["senhalog"].value;
        const User = {"nome": nome, "senha": senha};
        const select = [];
        DBService.getUser();
        console.log(select);
        //select.forEach(user =>{
            //if(user. == User.nome)
        //})*/
        
    }var navigate = useNavigate()
    return(
        <>
            <h1 className="mt-4">Faça seu login</h1>

            <div className="container mx-auto mt-4" id="login">
                <div className="row">
                    <div className="containerlogin col rounded"> 
                        <form id="loginform" method="POST">
                            <label>Nome:</label>
                            <input type="text" name="nomelog" id="nomelog" placeholder="" required/><br/>
                            <label>Senha:</label>
                            <input type="password" name="senhalog" id="senhalog" placeholder="" required/><br/>
                            <button id="enviar "type="submit" className="btn btn-success" onClick={()=>{navigate("/movimentacoes")}} >Enviar</button>   
                        </form>
                    </div>
                </div>
                <ModalLogin/>
                <div className="row mt-3">
                    <div className="col-5 mx-auto">
                        <p>Não tem uma conta ainda? <a id="cadtext" data-bs-toggle='modal' data-bs-target='#cadusermodal' href="">Crie uma.</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}