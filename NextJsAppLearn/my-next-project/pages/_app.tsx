import NextNProgress from "nextjs-progressbar";
export default function MyApp({Component, pageProps}) {
    return (
        <>
            <NextNProgress color={"black"} startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
            <Component {...pageProps} />
            <style jsx global>{`
                body{
                font-family: cursive;
                }
            `}</style>
        </>
    )
}