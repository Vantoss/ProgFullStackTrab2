import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Lancamentos() {
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