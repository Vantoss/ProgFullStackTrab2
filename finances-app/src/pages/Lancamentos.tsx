import Footer from "../components/Footer";
import Header from "../components/Header";
import Getters from "../service/Getters";

export default function Lancamentos() {
    Getters.getLanc();
    return (
        <>
            <Header/>
            <div className="container mt-2">
                <div className="row">
                    <h3>Seus lançamentos futuros</h3>
                    <div className="containertable col rounded" id="tabelalanc">
                        <table id="lancamentos" className="table table-bordered"></table>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}