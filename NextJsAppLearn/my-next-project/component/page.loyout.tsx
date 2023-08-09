import Head from "next/head";
import Router from "next/router";

export default function StylePage({children, currentPageTitle}){
    return (
        <>
            <Head>
                <title>{currentPageTitle}</title>
            </Head>
            <nav>
                <div className="container__context">
                    <button onClick={() => Router.push('/posts')} >Posts</button>
                    <button onClick={() => Router.push('/')}>Home</button>
                    <button onClick={() => Router.push('/about')}>About</button>
                </div>
            </nav>
            <main>
                {children}
            </main>
            <style jsx >{`
             nav{
              position: fixed;
              top: 0;
              left: 0;
              padding: 0;
              margin: 0;
              width: 100%;
              height: 10%;
              background-color: beige;
             } 
             .container__context{
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: space-around;
             }
             main{
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              width: 100%;
              height: 90%;
             }
            `}</style>
        </>
    )
}