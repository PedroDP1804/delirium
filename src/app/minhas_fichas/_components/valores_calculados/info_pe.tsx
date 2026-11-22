import { type Personagem } from "@/src/lib/FM/personagem";
import { Informativo } from "../informativo";
import { ScanSearch } from "lucide-react";
import { modificador } from "@/src/lib/FM/funcoes_personagem";

type InfoPEProps = {
    personagem: Personagem
}

export function InfoPE({personagem}:InfoPEProps) {

    // Apelidos
    const inteligencia_base = personagem.atributos.inteligência
    const bonus_inteligencia = personagem.bonus.atributos.inteligência
    const nivel = personagem.nivel

    //calcular modificador
    let bonus_total = 0
    bonus_inteligencia.forEach((bonus)=>{bonus_total += bonus.bonus})
    const valor_total = inteligencia_base + bonus_total
    const modificador_inteligencia = modificador(valor_total)

    // calcular bonus pe total
    let bonus_pe = 0
    personagem.bonus.pe_max.forEach((bonus)=>{bonus_pe += bonus.bonus})

    // gerar texto do informativo
    let texto_info =    `${nivel} niveis, +6 por nível (Base Especialização)`
                        + `\n+ ${modificador_inteligencia} (mod. int.)`
    personagem.bonus.pe_max.forEach((bonus)=>{texto_info += `\n+${bonus.bonus} (${bonus.fonte})`})
    texto_info += `\n= (${nivel} x 6) + ${modificador_inteligencia}`
    personagem.bonus.pe_max.forEach((bonus)=>{texto_info += ` + ${bonus.bonus}`})

    // calcular pe max
    const pe_max = (nivel )*6 + modificador_inteligencia + bonus_pe
    texto_info += `\n= ${pe_max}`
    
    
    return (
        <div className="flex flex-col items-end">
            <h2 className="text-lg flex gap-1 items-center">
                <b>PE: </b>
                {personagem.stats.pe_atual} / {pe_max}
                <Informativo texto={texto_info} icone={<ScanSearch color="#777777"/>}/>
            </h2>
            <h2 className="text-lg flex gap-1 items-center">
                <b>PE Temp.: </b>
                {personagem.stats.pe_temp}
                <Informativo texto=":)" icone={<ScanSearch color="#77777700"/>}/>
            </h2>
        </div>
    )
}