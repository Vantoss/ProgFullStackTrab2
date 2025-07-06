import { useEffect, useState } from "react";
import DBService from "../service/DBService";
import LinhaMovi from "./LinhaMovi";

export default function TableMovi(){
    const [movimentacoes, setMovi] = useState([]);

    useEffect(() => {
        DBService.getMovi().then(
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