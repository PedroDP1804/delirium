import { type Personagem } from "@/src/lib/FM/personagem";
import { Informativo } from "../informativo";
import { ScanSearch } from "lucide-react";
import { modificador_atributo } from "@/src/lib/FM/funcoes_personagem";

type InfoPEProps = {
    personagem: Personagem
}

export function InfoPE({personagem}:InfoPEProps) {

    // Apelidos
    const inteligencia_base = personagem.atributos.inteligência
    const lista_bônus_inteligencia = personagem.bônus.atributos.inteligência
    const nível = personagem.nível

    //calcular modificador de inteligência
    const modificador_inteligencia = modificador_atributo(inteligencia_base, lista_bônus_inteligencia)

    // calcular bônus pe total
    let bônus_pe = 0
    personagem.bônus.pe_max.forEach((bônus)=>{bônus_pe += bônus.valor})

    // gerar texto do informativo
    let texto_info =    `${nível} niveis, +6 por nível (Base Especialização)`
                        + `\n+ ${modificador_inteligencia} (mod. int.)`
    personagem.bônus.pe_max.forEach((bônus)=>{texto_info += `\n+${bônus.valor} (${bônus.fonte})`})
    texto_info += `\n= (${nível} x 6) + ${modificador_inteligencia}`
    personagem.bônus.pe_max.forEach((bônus)=>{texto_info += ` + ${bônus.valor}`})

    // calcular pe max
    const pe_max = (nível )*6 + modificador_inteligencia + bônus_pe
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