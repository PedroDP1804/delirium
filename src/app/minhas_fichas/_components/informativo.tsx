import { Tooltip, TooltipContent, TooltipTrigger } from "@/src/components/ui/tooltip"
import type { JSX } from "react";

export function Informativo({texto, icone}:{texto:string, icone:JSX.Element}) {
    return (
        <Tooltip>
            <TooltipTrigger className="hover:bg-gray-400 h-8 w-8 flex justify-center items-center rounded-lg">
                {icone}
            </TooltipTrigger>
            <TooltipContent className="whitespace-pre-wrap">
                {texto}
            </TooltipContent>
        </Tooltip>
    )
}