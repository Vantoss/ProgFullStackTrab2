import { Link } from "react-router";

export default function Header(){
    return(
        <header>
            <div id="headerbtns">
                <Link to="/movimentacoes" className="btn btn-success">Movimentações</Link>
                <Link to="/lancamentos" className="btn btn-success">Lançamentos</Link>
            </div>
        </header>
    )
}