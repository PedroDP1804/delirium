import { type Bonus } from "@/src/lib/FM/personagem";
import { Informativo } from "../informativo";
import { ScanSearch } from "lucide-react";
import { modificador } from "@/src/lib/FM/funcoes_personagem";

type InfoAtributoProps = {
    nome:string,
    base_atributo: number,
    bonus_atributo: Bonus[]
}

export function InfoAtributo({nome, base_atributo, bonus_atributo}:InfoAtributoProps) {

    let bonus_total = 0
    bonus_atributo.forEach((bonus)=>{bonus_total += bonus.bonus})
    const valor_total = base_atributo + bonus_total

    let texto_info =  `${valor_total}\n\n${base_atributo}`
    if (bonus_atributo.length == 0){
        texto_info += "\n+0"
    } else {
        bonus_atributo.forEach((bonus)=>{texto_info += `\n+${bonus.bonus} (${bonus.fonte})`})
    }
    
    
    return (
        <h2 className="text-lg flex gap-1 items-center">
            <b>{nome}: </b>
            {valor_total} (+{modificador(valor_total)})
            <Informativo texto={texto_info} icone={<ScanSearch color="#777777"/>}/>
        </h2>
    )
}