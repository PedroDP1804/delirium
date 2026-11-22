import { type Personagem } from "@/src/lib/FM/personagem";
import { Informativo } from "../informativo";
import { ScanSearch } from "lucide-react";
import { modificador } from "@/src/lib/FM/funcoes_personagem";

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
    const constituicao_base = personagem.atributos.constituição
    const bonus_constituicao = personagem.bonus.atributos.constituição
    const nivel = personagem.nivel

    //calcular modificador
    let bonus_total = 0
    bonus_constituicao.forEach((bonus)=>{bonus_total += bonus.bonus})
    const valor_total = constituicao_base + bonus_total
    const modificador_constituicao = modificador(valor_total)

    // calcular bonus pv total
    let bonus_pv = 0
    personagem.bonus.pv_max.forEach((bonus)=>{bonus_pv += bonus.bonus})

    // gerar texto do informativo
    let texto_info =    `Nivel 1:\t${10 + modificador_constituicao} (10 + mod. const.)`
                        + `\n+${nivel-1} niveis, +${5 + modificador_constituicao} por nível (Base Especialização + mod. const.)`
    personagem.bonus.pv_max.forEach((bonus)=>{texto_info += `\n+${bonus.bonus} (${bonus.fonte})`})
    texto_info += `\n= ${10 + modificador_constituicao} + (${nivel-1} x ${5 + modificador_constituicao})`
    personagem.bonus.pv_max.forEach((bonus)=>{texto_info += ` + ${bonus.bonus}`})

    // calcular pv max
    const pv_max = (10 + modificador_constituicao) + (nivel - 1)*(5 + modificador_constituicao) + bonus_pv
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