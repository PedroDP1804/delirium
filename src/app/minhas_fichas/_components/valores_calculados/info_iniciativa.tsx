import { type Personagem } from "@/src/lib/FM/personagem";
import { Informativo } from "../informativo";
import { ScanSearch } from "lucide-react";
import { modificador_atributo } from "@/src/lib/FM/funcoes_personagem";

type InfoIniciativaProps = {
    personagem: Personagem
}

export function InfoIniciativa({personagem}:InfoIniciativaProps) {

    // Calcular modificador de destreza
    const destreza_base = personagem.atributos.destreza
    const lista_bônus_destreza = personagem.bônus.atributos.destreza

    const modificador_destreza = modificador_atributo(destreza_base, lista_bônus_destreza)

    // calcular bônus iniciativa total
    let bônus_iniciativa = 0
    personagem.bônus.iniciativa.forEach((bônus)=>{bônus_iniciativa += bônus.valor})

    // gerar texto do informativo
    let texto_info =    `${modificador_destreza} (mod. destreza)`
    personagem.bônus.iniciativa.forEach((bônus)=>{texto_info += `\n+ ${bônus.valor} (${bônus.fonte})`})

    // calcular iniciativa
    const iniciativa = modificador_destreza + bônus_iniciativa
    texto_info += `\n= ${iniciativa}`
    
    
    return (
            <h2 className="text-lg flex gap-1 items-center">
                <b>Iniciativa: </b>
                +{iniciativa}
                <Informativo texto={texto_info} icone={<ScanSearch color="#777777"/>}/>
            </h2>
    )
}