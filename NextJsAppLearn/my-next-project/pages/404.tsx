import Link from "next/link";
import {useCopyToClipboard} from "../component/ownHook";
export default function ErrorPage(){
    const [isCopied, copyFunc] = useCopyToClipboard()
    const textForCopy = '/about'
    return (
        <main>
            {isCopied && <h1 style={{color:'initial'}}>Copied to clipboard!</h1>}
            <span>If button doesn't work, copy this text and paste to url search</span>
            <h1 style={{color:'initial'}}>Copy: <strong style={{color:'initial', userSelect:'none', cursor:'pointer'}} onClick={() => copyFunc(textForCopy)} >{textForCopy}</strong></h1>
            <h1>Status page: 404</h1>
            <h3>Error Page. We dont found this page. Please return to <Link href={'/about'}>About</Link></h3>
            <style jsx >{`
            main{
              width: 100%;
              margin-top: 100px;
              display: grid;
              place-items: center;
            }
            main h3{
            color: red;
            }
            main h1{
            text-align: center;
            color: red;
            }
            `}</style>
        </main>
    )
}