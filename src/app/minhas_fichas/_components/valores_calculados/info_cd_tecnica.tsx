import { type Personagem } from "@/src/lib/FM/personagem";
import { Informativo } from "../informativo";
import { ScanSearch } from "lucide-react";
import { bônus_treinamento, modificador_atributo } from "@/src/lib/FM/funcoes_personagem";

type InfoCDTécnicaProps = {
    personagem: Personagem
}

export function InfoCDTécnica({personagem}:InfoCDTécnicaProps) {

    // Atributo
    const chave_atributo = personagem.atributo_cd_especialização
    const atributo_base = personagem.atributos[chave_atributo]
    const lista_bônus_atributo = personagem.bônus.atributos[chave_atributo]

    // Apelidos
    const nível = personagem.nível
    const metade_nível = Math.trunc(nível/2)

    // Calcular modificador do atributo da técnica
    const modificador_atributo_técnica = modificador_atributo(atributo_base, lista_bônus_atributo)

    // calcular total de bônus na CD da Técnica
    let bônus_cd_técnica = 0
    personagem.bônus.cd_técnica.forEach((bônus)=>{bônus_cd_técnica += bônus.valor})

    // gerar texto do informativo
    let texto_info =    `10`
                        + `\n+ ${metade_nível} (Nível / 2)`
                        + `\n+ ${modificador_atributo_técnica} (mod. ${chave_atributo})`
                        + `\n+ ${bônus_treinamento(nível)} (bônus de treinamento)`
    personagem.bônus.cd_técnica.forEach((bônus)=>{texto_info += `\n+ ${bônus.valor} (${bônus.fonte})`})

    // calcular cd_técnica
    const cd_técnica = 10 + metade_nível + modificador_atributo_técnica + bônus_treinamento(nível) + bônus_cd_técnica
    texto_info += `\n= ${cd_técnica}`
    
    
    return (
            <h2 className="text-lg flex gap-1 items-center">
                <b>CD da Técnica: </b>
                {cd_técnica}
                <Informativo texto={texto_info} icone={<ScanSearch color="#777777"/>}/>
            </h2>
    )
}