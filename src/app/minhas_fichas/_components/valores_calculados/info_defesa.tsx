import { type Personagem } from "@/src/lib/FM/personagem";
import { Informativo } from "../informativo";
import { ScanSearch } from "lucide-react";
import { modificador } from "@/src/lib/FM/funcoes_personagem";

type InfoDefesaProps = {
    personagem: Personagem
}

export function InfoDefesa({personagem}:InfoDefesaProps) {

    // Apelidos
    const destreza_base = personagem.atributos.destreza
    const bonus_destreza = personagem.bonus.atributos.destreza
    const nivel = personagem.nivel

    //calcular modificador
    let bonus_total = 0
    bonus_destreza.forEach((bonus)=>{bonus_total += bonus.bonus})
    const valor_total = destreza_base + bonus_total
    const modificador_destreza = modificador(valor_total)

    // calcular bonus defesa total
    let bonus_defesa = 0
    personagem.bonus.defesa.forEach((bonus)=>{bonus_defesa += bonus.bonus})

    // gerar texto do informativo
    let texto_info =    `10\n+ ${modificador_destreza} (mod. destreza)`
                        + `\n+ ${Math.trunc(nivel/2)} (Nível / 2)`
    personagem.bonus.defesa.forEach((bonus)=>{texto_info += `\n+ ${bonus.bonus} (${bonus.fonte})`})

    // calcular defesa
    const defesa = 10 + modificador_destreza + Math.trunc(nivel/2) + bonus_defesa
    texto_info += `\n= ${defesa}`
    
    
    return (
            <h2 className="text-lg flex gap-1 items-center">
                <b>Defesa: </b>
                {defesa}
                <Informativo texto={texto_info} icone={<ScanSearch color="#777777"/>}/>
            </h2>
    )
}