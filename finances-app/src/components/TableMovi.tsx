import { useEffect, useState } from "react";
import Getters from "../service/Getters";
import LinhaMovi from "./LinhaMovi";

export default function TableMovi(){
    const [movimentacoes, setMovi] = useState([]);

    useEffect(() => {
        Getters.getMovi().then(
            movi => setMovi(movi)
        )
    }, [])

    return(
        
        movimentacoes.map(movi =>
            <LinhaMovi /*key={movi.id}*/ movi={movi}/>
        )
        /*(movimentacoes.forEach(movi =>{
            <LinhaMovi movi={movi}/>
        })*/
    ) 
    
}