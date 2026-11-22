import { type Personagem } from "@/src/lib/FM/personagem";
import { Informativo } from "../informativo";
import { ScanSearch } from "lucide-react";

type InfoDeslocamentoProps = {
    personagem: Personagem
}

export function InfoDeslocamento({personagem}:InfoDeslocamentoProps) {

    // calcular bonus deslocamento total
    let bonus_deslocamento = 0
    personagem.bonus.deslocamento.forEach((bonus)=>{bonus_deslocamento += bonus.bonus})

    // gerar texto do informativo
    let texto_info = "9m"
    personagem.bonus.deslocamento.forEach((bonus)=>{texto_info += `\n+ ${bonus.bonus} (${bonus.fonte})`})

    // calcular deslocamento
    const deslocamento = 9 + bonus_deslocamento
    texto_info += `\n= ${deslocamento}m`
    
    
    return (
            <h2 className="text-lg flex gap-1 items-center">
                <b>Deslocamento: </b>
                {deslocamento}m
                <Informativo texto={texto_info} icone={<ScanSearch color="#777777"/>}/>
            </h2>
    )
}