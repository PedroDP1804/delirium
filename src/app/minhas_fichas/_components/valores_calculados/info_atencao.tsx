import { type Personagem } from "@/src/lib/FM/personagem";
import { Informativo } from "../informativo";
import { ScanSearch } from "lucide-react";
import { bônus_treinamento, modificador_atributo, multiplicador_treinamento } from "@/src/lib/FM/funcoes_personagem";

type InfoAtençãoProps = {
    personagem: Personagem
}

export function InfoAtenção({personagem}:InfoAtençãoProps) {

    // Calcular bônus total na pericia Percepção
    let total_bônus_percepção = modificador_atributo(personagem.atributos.sabedoria, personagem.bônus.atributos.sabedoria)
    total_bônus_percepção += Math.trunc(personagem.nível/2)

    // somar bônus de treinamento se treinado
    const multiplicador_bonus_treinamento = multiplicador_treinamento(personagem.perícias.percepção)
    total_bônus_percepção += Math.trunc(bônus_treinamento(personagem.nível) * multiplicador_bonus_treinamento)

    // somar os bônus extra em percepção
    const lista_bônus_percepção = personagem.bônus.perícias.filter((bônus_perícia)=>(bônus_perícia.perícia == "percepção"))
    lista_bônus_percepção.forEach((bônus)=>{total_bônus_percepção += bônus.bônus.valor})

    // somar os bônus extra em atenção
    let bônus_atenção = 0
    personagem.bônus.atenção.forEach((bônus)=>{bônus_atenção += bônus.valor})

    // gerar texto do informativo
    let texto_info = `10\n+ ${total_bônus_percepção} (Bônus Percepção)`
    personagem.bônus.atenção.forEach((bônus)=>{texto_info += `\n+ ${bônus.valor} (${bônus.fonte})`})

    // calcular atenção
    const atenção = 10 + total_bônus_percepção + bônus_atenção
    texto_info += `\n= ${atenção}`
    
    return (
            <h2 className="text-lg flex gap-1 items-center">
                <b>Atenção: </b>
                {atenção}
                <Informativo texto={texto_info} icone={<ScanSearch color="#777777"/>}/>
            </h2>
    )
}