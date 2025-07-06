import { useEffect, useState } from "react";
import DBService from "../service/DBService";
import LinhaLanc from "./LinhaLanc";

export default function TableLanc(){
    const [lancamentos, setLanc] = useState([]);

    useEffect(() => {
        DBService.getLanc().then(
            lanc => setLanc(lanc)
        )
    }, [])

    return(
        
        lancamentos.map(lanc =>
            <LinhaLanc /*key={lanc.id}*/ lanc={lanc}/>
        )
        /*(movimentacoes.forEach(movi =>{
            <LinhaMovi movi={movi}/>
        })*/
    ) 
    
}