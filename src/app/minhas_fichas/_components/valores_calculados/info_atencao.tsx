import { type Personagem } from "@/src/lib/FM/personagem";
import { Informativo } from "../informativo";
import { ScanSearch } from "lucide-react";
import { bonus_treinamento, modificador } from "@/src/lib/FM/funcoes_personagem";

type InfoAtencaoProps = {
    personagem: Personagem
}

export function InfoAtencao({personagem}:InfoAtencaoProps) {

    // >>>> Calcular bonus total na pericia Percepção
    let total_bonus_percepcao = 0

    // calcular mod. sabedoria
    let total_sabedoria = personagem.atributos.sabedoria
    personagem.bonus.atributos.sabedoria.forEach((bonus)=>{total_sabedoria += bonus.bonus})
    const modificador_sabedoria = modificador(total_sabedoria)
    total_bonus_percepcao += modificador_sabedoria + Math.trunc(personagem.nivel/2)

    // somar bônus de treinamento se treinado
    let multiplicador_treinamento = 0
    switch (personagem.pericias.percepção) {
        case "D":
            multiplicador_treinamento = 0
            break
        case "T":
            multiplicador_treinamento = 1
            break
        case "M":
            multiplicador_treinamento = 1.5
            break
    }
    total_bonus_percepcao += bonus_treinamento(personagem.nivel) * multiplicador_treinamento

    // somar os bonus extra em percepção
    const lista_bonus_percepcao = personagem.bonus.pericias.filter((bonus_pericia)=>(bonus_pericia.pericia == "percepção"))
    lista_bonus_percepcao.forEach((bonus)=>{total_bonus_percepcao += bonus.bonus.bonus})



    // calcular bonus atencao total
    let bonus_atencao = 0
    personagem.bonus.atencao.forEach((bonus)=>{bonus_atencao += bonus.bonus})

    // gerar texto do informativo
    let texto_info = `10\n+ ${total_bonus_percepcao} (Bônus Percepção)`
    personagem.bonus.atencao.forEach((bonus)=>{texto_info += `\n+ ${bonus.bonus} (${bonus.fonte})`})

    // calcular atencao
    const atencao = 10 + total_bonus_percepcao + bonus_atencao
    texto_info += `\n= ${atencao}`
    
    
    return (
            <h2 className="text-lg flex gap-1 items-center">
                <b>Atenção: </b>
                {atencao}
                <Informativo texto={texto_info} icone={<ScanSearch color="#777777"/>}/>
            </h2>
    )
}