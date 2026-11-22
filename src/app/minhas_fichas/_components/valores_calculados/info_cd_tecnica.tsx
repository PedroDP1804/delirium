import { type Personagem } from "@/src/lib/FM/personagem";
import { Informativo } from "../informativo";
import { ScanSearch } from "lucide-react";
import { bônus_treinamento, modificador_atributo } from "@/src/lib/FM/funcoes_personagem";

type InfoCDTécnicaProps = {
    personagem: Personagem
}

export function InfoCDTécnica({personagem}:InfoCDTécnicaProps) {

    // Apelidos
    const inteligência_base = personagem.atributos.inteligência
    const lista_bônus_inteligência = personagem.bônus.atributos.inteligência
    const nível = personagem.nível
    const metade_nível = Math.trunc(nível/2)

    // Calcular modificador de inteligência
    const modificador_inteligência = modificador_atributo(inteligência_base, lista_bônus_inteligência)

    // calcular total de bônus na CD da Técnica
    let bônus_cd_técnica = 0
    personagem.bônus.cd_técnica.forEach((bônus)=>{bônus_cd_técnica += bônus.valor})

    // gerar texto do informativo
    let texto_info =    `10`
                        + `\n+ ${metade_nível} (Nível / 2)`
                        + `\n+ ${modificador_inteligência} (mod. inteligência)`
                        + `\n+ ${bônus_treinamento(nível)} (bônus de treinamento)`
    personagem.bônus.cd_técnica.forEach((bônus)=>{texto_info += `\n+ ${bônus.valor} (${bônus.fonte})`})

    // calcular cd_técnica
    const cd_técnica = 10 + metade_nível + modificador_inteligência + bônus_treinamento(nível) + bônus_cd_técnica
    texto_info += `\n= ${cd_técnica}`
    
    
    return (
            <h2 className="text-lg flex gap-1 items-center">
                <b>CD da Técnica: </b>
                {cd_técnica}
                <Informativo texto={texto_info} icone={<ScanSearch color="#777777"/>}/>
            </h2>
    )
}