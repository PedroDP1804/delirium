import { type Bônus } from "@/src/lib/FM/personagem";
import { Informativo } from "../informativo";
import { ScanSearch } from "lucide-react";
import { modificador_atributo } from "@/src/lib/FM/funcoes_personagem";

type InfoAtributoProps = {
    nome:string,
    base_atributo: number,
    lista_bônus_atributo: Bônus[]
}

export function InfoAtributo({nome, base_atributo, lista_bônus_atributo}:InfoAtributoProps) {

    // calcular total atributo
    let total_atributo = base_atributo
    lista_bônus_atributo.forEach((bônus)=>{total_atributo += bônus.valor})

    // gerar texto informativo
    let texto_info =  `${total_atributo}\n\n${base_atributo}`
    lista_bônus_atributo.forEach((bônus)=>{texto_info += `\n+${bônus.valor} (${bônus.fonte})`})
    
    
    return (
        <h2 className="text-lg flex gap-1 items-center">
            <b>{nome}: </b>
            {total_atributo} (+{modificador_atributo(total_atributo, [])})
            <Informativo texto={texto_info} icone={<ScanSearch color="#777777"/>}/>
        </h2>
    )
}