import App from "./App";
import { Route, Routes } from "react-router";
import Movimentacoes from "./pages/Movimentacoes";
import Lancamentos from "./pages/Lancamentos";
import Login from "./pages/Login";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<App></App>}>
                <Route index element={<Login />}></Route>
                <Route path="/movimentacoes" element={<Movimentacoes />}></Route>
                <Route path="/lancamentos" element={<Lancamentos />}></Route>
            </Route>
        </Routes>
    )
}