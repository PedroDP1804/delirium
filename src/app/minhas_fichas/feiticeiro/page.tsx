"use client"
import { Principal } from "../_components/principal";
import { Abas } from "../_components/abas";
import { useState } from "react";
import { angelo } from "@/src/lib/personagem";
import { Tecnica } from "../_components/tecnica";

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
            return <Tecnica personagem={angelo}/>
            // return (
            //   <ul className="h-full flex flex-col items-center w-full gap-5">
            //     {feitiços.map((h, i)=>(
            //       <Habilidade
            //         key={i}
            //         hab={h}
            //       />
            //     ))}
            //   </ul>
            // )
          default:
            return null
        }
      })()}
      {/*  */}


    </main>
  );
}
