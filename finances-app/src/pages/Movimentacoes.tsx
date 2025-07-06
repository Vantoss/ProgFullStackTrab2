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
                            <button className="btn btn-success" id="pm" type="button" data-bs-toggle="collapse" data-bs-target="#pesquisar" aria-expanded="false" aria-controls="collapse">
                            Pesquisar
                            </button>
                        </div>
                        <div id="pesquisar" className="collapse">
                            <form id="formpesquisar">
                                <label>Nome:</label>
                                <input type="text" name="nomem" id="nomep"/>
                                <label>Categoria:</label>
                                <select name="categoriap" id="categoria">
                                    <option value="Qualquer">Qualquer</option>
                                    <option value="Moradia">Moradia</option>
                                    <option value="Alimentação">Alimentação</option>
                                    <option value="Lazer">Lazer</option>
                                    <option value="Saúde">Saúde</option>
                                    <option value="Educação">Educação</option>
                                    <option value="Transporte">Transporte</option>
                                    <option value="Trabalho">Trabalho</option>
                                </select>
                                <label>Data:</label>
                                <input name="datam" id="datap"/>
                                <label>Valor:</label>
                                <input type="number" name="valorm" id="valorp"/>
                                <label>Tipo:</label>
                                <select name="tipom" id="tipop">
                                    <option value="Qualquer">Qualquer</option>
                                    <option value="Despesa">Despesa</option>
                                    <option value="Receita">Receita</option>
                                </select>
                                <button type="submit" id="pesqbtn" className="btn btn-success" /*onClick={pesqMovi()}*/>Pesquisar</button>
                            </form>
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