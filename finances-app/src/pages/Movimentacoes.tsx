import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Movimentacoes() {
    return (
        <> 
            <Header/>
            <div className="container mt-2">
                <div className="row">
                    <h3>Suas movimentações</h3>
                    <div className="containertable col rounded" id="tabelamovi">
                        <table id="movimentacoes" className="table table-bordered"></table>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}