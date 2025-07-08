import { useNavigate } from "react-router";
import ModalLogin from "../components/ModalLogin"
import DBService from "../service/DBService";

export default function Login(){
    var navigate = useNavigate()
    const login = (e:any)=>{
        e.preventDefault()
        /*var nome = document.forms["loginform"]["nomelog"].value;
        var senha = document.forms["loginform"]["senhalog"].value;
        console.log("nome:", nome)
        console.log("senha:", senha)
        const User = {"nome": nome, "senha": senha};
        const lista:any[] = [];
        const lista2:any[] = [];
        DBService.getUser().then(
            user => user.forEach((u:any)=>{
                lista.push(u);
            })
        );
        console.log("usuários:", lista[0])
        lista.forEach(user => {
            if(user.nome == User.nome && user.senha == User.senha){
                lista2.push(user);
            } else{
                console.log("n")
            }
        });
        console.log("usuários:", lista)
        console.log(lista2)*/

        navigate("/movimentacoes");
    }
    return(
        <>
            <h1 className="mt-4">Faça seu login</h1>

            <div className="container mx-auto mt-4" id="login">
                <div className="row">
                    <div className="containerlogin col rounded"> 
                        <form id="loginform" method="POST" onSubmit={login}>
                            <label>Nome:</label>
                            <input type="text" name="nomelog" id="nomelog" placeholder="" required/><br/>
                            <label>Senha:</label>
                            <input type="password" name="senhalog" id="senhalog" placeholder="" required/><br/>
                            <button id="enviar" type="submit" className="btn btn-success"  >Enviar</button>   
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