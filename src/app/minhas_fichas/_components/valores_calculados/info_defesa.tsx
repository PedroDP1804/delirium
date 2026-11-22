import { type Personagem } from "@/src/lib/FM/personagem";
import { Informativo } from "../informativo";
import { ScanSearch } from "lucide-react";
import { modificador_atributo } from "@/src/lib/FM/funcoes_personagem";

type InfoDefesaProps = {
    personagem: Personagem
}

export function InfoDefesa({personagem}:InfoDefesaProps) {

    // Apelidos
    const destreza_base = personagem.atributos.destreza
    const lista_bônus_destreza = personagem.bônus.atributos.destreza
    const nível = personagem.nível
    const metade_nível = Math.trunc(nível/2)

    // Calcular modificador de destreza
    const modificador_destreza = modificador_atributo(destreza_base, lista_bônus_destreza)

    // calcular bônus defesa total
    let bônus_defesa = 0
    personagem.bônus.defesa.forEach((bônus)=>{bônus_defesa += bônus.valor})

    // gerar texto do informativo
    let texto_info =    `10\n+ ${modificador_destreza} (mod. destreza)`
                        + `\n+ ${metade_nível} (Nível / 2)`
    personagem.bônus.defesa.forEach((bônus)=>{texto_info += `\n+ ${bônus.valor} (${bônus.fonte})`})

    // calcular defesa
    const defesa = 10 + modificador_destreza + metade_nível + bônus_defesa
    texto_info += `\n= ${defesa}`
    
    
    return (
            <h2 className="text-lg flex gap-1 items-center">
                <b>Defesa: </b>
                {defesa}
                <Informativo texto={texto_info} icone={<ScanSearch color="#777777"/>}/>
            </h2>
    )
}