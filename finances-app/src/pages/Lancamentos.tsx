import Footer from "../components/Footer";
import Header from "../components/Header";
import ModalsLanc from "../components/ModalsLanc";
import TableLanc from "../components/TableLanc";

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
                        <ModalsLanc/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}