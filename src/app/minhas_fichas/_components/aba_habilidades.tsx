import type { Personagem } from "@/src/lib/FM/personagem";
import { CardHabilidade } from "./card_habilidade";

export function AbaHabilidades({personagem}:{personagem:Personagem}) {

    // lista de niveis de 1 ao nível do personagem
    // const niveis = Array.from(Array(personagem.nível).keys()).map((n)=>(n+1))
    const niveis = Array(personagem.nível).fill(0)

    return (
        <section className="w-[70%] flex flex-col items-center">

            <div className="poligono1 h-max w-full bg-black p-0.5 max-w-300 overflow-hidden relative">
                <div className="bg-white poligono1 h-full">

                    {/* Header */}
                    <div className="h-24 border-b border-gray-500 pt-8">
                        <h1 className="pl-5 font-jujutsu-titulo text-4xl">
                            Habilidades
                        </h1>
                    </div>

                </div>
            </div>


            {/* Habilidades */}
            <ul className="w-full">
                {niveis.map((_, num)=>(
                    <div key={num}>

                        <div className="
                            flex justify-center items-center
                            mt-20 w-full h-max
                        ">
                            <div className="
                                bg-[url('/tinta.webp')] bg-local bg-cover bg-no-repeat bg-center
                                flex justify-center items-center
                                min-w-max w-150 h-30
                            ">
                                <h1 className="font-jujutsu-titulo text-4xl">
                                    Nível {num+1}
                                </h1>
                            </div>
                        </div>

                        <ul className="h-full flex flex-col items-center w-full gap-10 mt-10">
                            {
                                personagem.habilidades
                                .filter((hab)=>(hab.obtida_no_nível == num+1))
                                .map((habilidade, index)=>(
                                    <CardHabilidade key={index} habilidade={habilidade}/>
                                ))
                            }
                        </ul>

                    </div>

                ))}
            </ul>


        </section>
    )
}