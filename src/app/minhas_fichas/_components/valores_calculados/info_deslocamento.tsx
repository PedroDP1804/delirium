import { type Personagem } from "@/src/lib/FM/personagem";
import { Informativo } from "../informativo";
import { ScanSearch } from "lucide-react";

type InfoDeslocamentoProps = {
    personagem: Personagem
}

export function InfoDeslocamento({personagem}:InfoDeslocamentoProps) {

    // calcular bônus deslocamento total
    let bônus_deslocamento = 0
    personagem.bônus.deslocamento.forEach((bônus)=>{bônus_deslocamento += bônus.valor})

    // gerar texto do informativo
    let texto_info = "9m"
    personagem.bônus.deslocamento.forEach((bônus)=>{texto_info += `\n+ ${bônus.valor} (${bônus.fonte})`})

    // calcular deslocamento
    const deslocamento = 9 + bônus_deslocamento
    texto_info += `\n= ${deslocamento}m`
    
    
    return (
            <h2 className="text-lg flex gap-1 items-center">
                <b>Deslocamento: </b>
                {deslocamento}m
                <Informativo texto={texto_info} icone={<ScanSearch color="#777777"/>}/>
            </h2>
    )
}