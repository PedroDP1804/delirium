import { type Atributos, type Personagem } from "@/src/lib/FM/personagem";
import { Informativo } from "../informativo";
import { ScanSearch } from "lucide-react";
import { bônus_treinamento, modificador_atributo } from "@/src/lib/FM/funcoes_personagem";

type InfoCDEspecializaçãoProps = {
    personagem: Personagem
}

export function InfoCDEspecialização({personagem}:InfoCDEspecializaçãoProps) {

    // Atributo
    const chave_atributo = personagem.atributo_cd_especialização as keyof Atributos
    const atributo_base = personagem.atributos[chave_atributo]
    const lista_bônus_atributo = personagem.bônus.atributos[chave_atributo]

    // Apelidos
    const nível = personagem.nível
    const metade_nível = Math.trunc(nível/2)

    // Calcular modificador de atributo
    const modificador_atributo_especialização = modificador_atributo(atributo_base, lista_bônus_atributo)

    // calcular total de bônus na CD Especializacao
    let bônus_cd_especialização = 0
    personagem.bônus.cd_especialização.forEach((bônus)=>{bônus_cd_especialização += bônus.valor})

    // gerar texto do informativo
    let texto_info =    `10`
                        + `\n+ ${metade_nível} (Nível / 2)`
                        + `\n+ ${modificador_atributo_especialização} (mod. ${chave_atributo})`
                        + `\n+ ${bônus_treinamento(nível)} (bônus de treinamento)`
    personagem.bônus.cd_especialização.forEach((bônus)=>{texto_info += `\n+ ${bônus.valor} (${bônus.fonte})`})

    // calcular cd_especialização
    const cd_especialização = 10 + metade_nível + modificador_atributo_especialização + bônus_treinamento(nível) + bônus_cd_especialização
    texto_info += `\n= ${cd_especialização}`
    
    
    return (
            <h2 className="text-lg flex gap-1 items-center">
                <b>CD Especializacao: </b>
                {cd_especialização}
                <Informativo texto={texto_info} icone={<ScanSearch color="#777777"/>}/>
            </h2>
    )
}