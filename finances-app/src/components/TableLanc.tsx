import { useEffect, useState } from "react";
import Getters from "../service/Getters";
import LinhaLanc from "./LinhaLanc";

export default function TableLanc(){
    const [lancamentos, setLanc] = useState([]);

    useEffect(() => {
        Getters.getLanc().then(
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