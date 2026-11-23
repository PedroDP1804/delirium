import { perícias_atributos, resistencia_atributos, type Personagem } from "@/src/lib/FM/personagem";
import { InfoPericia } from "./valores_calculados/info_pericia";
import { InfoTesteResistencia } from "./valores_calculados/info_teste_resistencia";
import { SeçãoAtaques } from "./valores_calculados/secao_ataques";


export function AbaTestesEPerícias({personagem}:{personagem:Personagem}) {

    return (
        <section className="flex flex-col items-center">

            <div className="poligono1 h-max w-[90vw] max-w-300 max-[730px]:max-w-[500px] bg-black p-0.5 overflow-hidden relative">
            <div className="bg-white poligono1 h-full">

                {/* Header */}
                <div className="h-24 border-b border-gray-500 pt-8">
                    <h1 className="pl-5 font-jujutsu-titulo text-4xl">
                        Testes & Perícias
                    </h1>
                </div>

                {/* Perícias */}
                <div className="pt-5 pb-6 pl-3 pr-[10%] border-b border-gray-500">

                    <h1 className="pl-3 font-jujutsu-titulo text-3xl">
                        Perícias
                    </h1>

                    <div className="flex gap-8 mix-[730px]:gap-20 mt-2 pl-5 max-[730px]:flex-col">

                        {/* Perícias 1 a 10 */}
                        <ul className="flex flex-col gap-0">
                            {Object.keys(perícias_atributos).slice(0, 10).map((pericia, index)=>(
                                <InfoPericia key={index} nome={pericia} personagem={personagem}/>
                            ))}
                        </ul>

                        {/* Perícias 11 a 20 */}
                        <ul className="flex flex-col gap-0">
                            {Object.keys(perícias_atributos).slice(10, undefined).map((pericia, index)=>(
                                <InfoPericia key={index} nome={pericia} personagem={personagem}/>
                            ))}
                        </ul>

                    </div>

                </div>


                {/* Testes de Resistência */}
                <div className="pt-5 pb-6 pl-3 pr-[10%] border-b border-gray-500">

                    <h1 className="pl-3 font-jujutsu-titulo text-3xl">
                        Testes de Resistência
                    </h1>

                    <div className="mt-2 pl-5">

                        {/* Testes de Resistência 1 a 10 */}
                        <ul className="flex flex-col gap-0">
                            {Object.keys(resistencia_atributos).map((teste_resistencia, index)=>(
                                <InfoTesteResistencia key={index} nome={teste_resistencia} personagem={personagem}/>
                            ))}
                        </ul>


                    </div>

                </div>


                {/* Ataques */}
                <div className="pt-5 pb-6 pl-3 pr-[10%] border-b border-gray-500">

                    <h1 className="pl-3 font-jujutsu-titulo text-3xl">
                        Jogadas de Ataque
                    </h1>

                    <SeçãoAtaques personagem={personagem}/>

                </div>

            </div>
            </div>

        </section>
    )
}