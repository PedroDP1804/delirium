import { type Personagem } from "@/src/lib/FM/personagem";
import { Informativo } from "../informativo";
import { ScanSearch } from "lucide-react";
import { bonus_treinamento, modificador } from "@/src/lib/FM/funcoes_personagem";

type InfoCDEspecializacaoProps = {
    personagem: Personagem
}

export function InfoCDEspecializacao({personagem}:InfoCDEspecializacaoProps) {

    // Apelidos
    const inteligencia_base = personagem.atributos.inteligência
    const bonus_inteligencia = personagem.bonus.atributos.inteligência
    const nivel = personagem.nivel

    //calcular modificador
    let bonus_total = 0
    bonus_inteligencia.forEach((bonus)=>{bonus_total += bonus.bonus})
    const valor_total = inteligencia_base + bonus_total
    const modificador_inteligencia = modificador(valor_total)

    // calcular bonus CD Especializacao total
    let bonus_cd_especializacao = 0
    personagem.bonus.cd_especializacao.forEach((bonus)=>{bonus_cd_especializacao += bonus.bonus})

    // gerar texto do informativo
    let texto_info =    `10`
                        + `\n+ ${Math.trunc(nivel/2)} (Nível / 2)`
                        + `\n+ ${modificador_inteligencia} (mod. inteligência)`
                        + `\n+ ${bonus_treinamento(nivel)} (bônus de treinamento)`
    personagem.bonus.cd_especializacao.forEach((bonus)=>{texto_info += `\n+ ${bonus.bonus} (${bonus.fonte})`})

    // calcular cd_especializacao
    const cd_especializacao = 10 + Math.trunc(nivel/2) + modificador_inteligencia + bonus_treinamento(nivel) + bonus_cd_especializacao
    texto_info += `\n= ${cd_especializacao}`
    
    
    return (
            <h2 className="text-lg flex gap-1 items-center">
                <b>CD Especializacao (I): </b>
                {cd_especializacao}
                <Informativo texto={texto_info} icone={<ScanSearch color="#777777"/>}/>
            </h2>
    )
}