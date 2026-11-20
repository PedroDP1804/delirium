"use client"
import { Principal } from "../_components/principal";
import { Abas } from "../_components/abas";
import { useState } from "react";
import { angelo } from "@/src/lib/FM/angelo";
import { AbaTecnica } from "../_components/aba_tecnica";
import { AbaHabilidades } from "../_components/aba_habilidades";

export default function Home() {

  const [aba, setAba] = useState<number>(0)


  return (
    <main className="
      flex flex-col items-center gap-15
      h-full min-h-[120vh] pb-50
      bg-fixed bg-cover bg-[url(/bg-feiticeiro.png)]
    ">
      
      <Abas atual={aba} funcao={setAba}/>

      {(()=>{
        switch (aba) {
          case 0:
            return <Principal personagem={angelo}/>
          case 1:
            return <AbaTecnica personagem={angelo}/>
          case 2:
            return <AbaHabilidades personagem={angelo}/>
          default:
            return null
        }
      })()}
      {/*  */}


    </main>
  );
}
