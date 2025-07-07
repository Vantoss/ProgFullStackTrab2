import Footer from "../components/Footer";
import Header from "../components/Header";
import ModalsMovi from "../components/ModalsMovi";
import TableMovi from "../components/TableMovi";

export default function Movimentacoes() {
    return (
        <> 
            <Header/>
            <div className="container mt-2">
                <div className="row">
                    <h3>Suas movimentações</h3>
                    <div className="containertable col rounded" id="tabelamovi">
                        <div id="btns">
                            <button type='submit' id='cadm' className='btn btn-success' data-bs-toggle='modal' data-bs-target='#cadmmodal'>Registrar gasto/receita</button>
                        </div>
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
                        <ModalsMovi/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}