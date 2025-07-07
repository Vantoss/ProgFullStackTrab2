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
                        <div id="btns">
                            <button type='submit' id='cadf' className='btn btn-success' data-bs-toggle='modal' data-bs-target='#cadfmodal'>Registrar lançamento</button>
                        </div>
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