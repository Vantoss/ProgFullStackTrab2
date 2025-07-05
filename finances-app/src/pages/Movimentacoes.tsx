import Footer from "../components/Footer";
import Header from "../components/Header";
import TableMovi from "../components/TableMovi";
//import Getters from "../service/Getters";

export default function Movimentacoes() {
    return (
        <> 
            <Header/>
            <div className="container mt-2">
                <div className="row">
                    <h3>Suas movimentações</h3>
                    <div className="containertable col rounded" id="tabelamovi">
                        <table id="movimentacoes" className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Categoria</th>
                                    <th>Data</th>
                                    <th>Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TableMovi/>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}