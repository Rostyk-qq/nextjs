import StylePage from "../component/page.loyout";
import {IAbout} from "../Types/PostTypes";
import {NextPageContext} from "next";

interface AboutParams {
    message: string
}
export default function About({message}: AboutParams){
    return (
        <StylePage currentPageTitle={'About'}>
            <div style={{paddingLeft:'40px'}}>
                <h3>Render problems are issues that affect the appearance or performance of render-faced houses or 3D graphics.</h3>
                <h3>Some common render problems are:</h3>
                <h3>Cracks, flaking, or dampness in the walls or paintwork</h3>
                <h3>Hollow or loose rendering</h3>
                <h3>Previous repairs that are visible</h3>
                <h3>Green mould growing on the outside</h3>
                <h3>Blender crashing or producing black screens or missing objects</h3>
                <br/>
                <h1>{message}</h1>
            </div>
        </StylePage>
    )
}
About.getInitialProps = async ({}: NextPageContext) => {
    const response = await fetch(`${process.env.BASE_URL}/about`)
    const sorryMessage: IAbout = await response.json()
    return {
        message: sorryMessage.text
    }
}