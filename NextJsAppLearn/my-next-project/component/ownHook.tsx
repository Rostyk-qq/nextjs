import {useEffect, useState} from "react";

export const useCopyToClipboard = () => {
    const [isCopied, setIsCopied] = useState(false)

    function copy(text){
        if (typeof text !== "string"){
            return
        }
        navigator
            .clipboard
            .writeText(text)
            .then(() => setIsCopied(true))
            .catch((e)=> console.error(e.message))
    }
    useEffect(() => {
        if (isCopied){
            setTimeout(() => {
                setIsCopied(false)
            }, 3000)
        }
    }, [isCopied])

    return [isCopied, copy]
}
