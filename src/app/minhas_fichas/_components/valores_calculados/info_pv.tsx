import { type Personagem } from "@/src/lib/FM/personagem";
import { Informativo } from "../informativo";
import { ScanSearch } from "lucide-react";
import { modificador_atributo } from "@/src/lib/FM/funcoes_personagem";

type InfoPVProps = {
    personagem: Personagem
}

export function InfoPV({personagem}:InfoPVProps) {
    
    // Função pra cores diferentes com base na porcentagem da vida/integridade
    function estilo_vida(atual:number, max:number) {
        const porcentagem = atual / max
        if (porcentagem > 0.5 && porcentagem <= 0.75) return "text-purple-600"
        if (porcentagem > 0.25 && porcentagem <= 0.5) return "text-yellow-400"
        if (porcentagem <= 0.25) return "text-red-600"
    }

    // Apelidos
    const constituição_base = personagem.atributos.constituição
    const lista_bônus_constituição = personagem.bônus.atributos.constituição
    const nível = personagem.nível

    //calcular modificador de constituição
    const modificador_constituição = modificador_atributo(constituição_base, lista_bônus_constituição)

    // calcular bônus pv total
    let bônus_pv = 0
    personagem.bônus.pv_max.forEach((bônus)=>{bônus_pv += bônus.valor})

    // gerar texto do informativo
    let texto_info =    `Nível 1:\t${10 + modificador_constituição} (10 + mod. const.)`
                        + `\n+${nível-1} niveis, +${5 + modificador_constituição} por nível (Base Especialização + mod. const.)`
    personagem.bônus.pv_max.forEach((bônus)=>{texto_info += `\n+${bônus.valor} (${bônus.fonte})`})
    texto_info += `\n= ${10 + modificador_constituição} + (${nível-1} x ${5 + modificador_constituição})`
    personagem.bônus.pv_max.forEach((bônus)=>{texto_info += ` + ${bônus.valor}`})

    // calcular pv max
    const pv_max = (10 + modificador_constituição) + (nível - 1)*(5 + modificador_constituição) + bônus_pv
    texto_info += `\n= ${pv_max}`
    
    
    return (
        <div className="flex flex-col items-end">
            <h2 className="text-lg flex gap-1 items-center">
                <b>PV: </b>
                <span className={estilo_vida(personagem.stats.pv_atual, pv_max)}>{personagem.stats.pv_atual} / {pv_max}</span>
                <Informativo texto={texto_info} icone={<ScanSearch color="#777777"/>}/>
            </h2>
            <h2 className="text-lg flex gap-1 items-center">
                <b>PV Temp.: </b>
                {personagem.stats.pv_temp}
                <Informativo texto=":)" icone={<ScanSearch color="#77777700"/>}/>
            </h2>
            <h2 className="text-lg flex gap-1 items-center">
                <b>Integridade: </b>
                <span className={estilo_vida(personagem.stats.integridade_atual, pv_max)}>{personagem.stats.integridade_atual} / {pv_max}</span>
                <Informativo texto={texto_info} icone={<ScanSearch color="#777777"/>}/>
            </h2>
        </div>
    )
}