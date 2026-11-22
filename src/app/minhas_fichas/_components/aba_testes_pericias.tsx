import { pericias_atributos, type Pericias, type Personagem } from "@/src/lib/FM/personagem";
import { InfoPericia } from "./valores_calculados/info_pericia";


export function AbaTestesEPericias({personagem}:{personagem:Personagem}) {

    return (
        <section className="w-[70%] flex flex-col items-center">

            <div className="poligono1 h-max w-full bg-black p-0.5 max-w-300 overflow-hidden relative">
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

                    <div className="flex gap-20 mt-2 pl-5">

                        {/* Perícias 1 a 10 */}
                        <ul className="flex flex-col gap-0">
                            {Object.keys(pericias_atributos).slice(0, 10).map((pericia, index)=>(
                                <InfoPericia key={index} nome={pericia} personagem={personagem}/>
                            ))}
                        </ul>

                        {/* Perícias 11 a 20 */}
                        <ul className="flex flex-col gap-0">
                            {Object.keys(pericias_atributos).slice(10, undefined).map((pericia, index)=>(
                                <InfoPericia key={index} nome={pericia} personagem={personagem}/>
                            ))}
                        </ul>

                    </div>

                </div>

            </div>
            </div>

        </section>
    )
}