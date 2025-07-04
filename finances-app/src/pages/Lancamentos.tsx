import Footer from "../components/Footer";
import Header from "../components/Header";
import TableLanc from "../components/TableLanc";
//import Getters from "../service/Getters";

export default function Lancamentos() {
    return (
        <>
            <Header/>
            <div className="container mt-2">
                <div className="row">
                    <h3>Seus lançamentos futuros</h3>
                    <div className="containertable col rounded" id="tabelalanc">
                        <table id="lancamentos" className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Categoria</th>
                                    <th>Prazo</th>
                                    <th>Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TableLanc/>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}