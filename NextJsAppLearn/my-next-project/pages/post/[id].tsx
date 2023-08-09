import fetch from "isomorphic-unfetch";
import StylePage from "../../component/page.loyout";
import {IPost} from "../../Types/PostTypes";
import {NextPageContext} from "next";
interface CurrentPost{
    data: string
}
interface PageContext extends NextPageContext{
    query: {
        id: string
    }
}
export default function Post({data}: CurrentPost){
    return (
        <StylePage currentPageTitle={'Current Post'}>
            <h1>Post Info</h1>
            <span><h3>Description:</h3> <strong>{data}</strong></span>
        </StylePage>
    )
}
Post.getInitialProps = async ({query}: PageContext) => {
    const response = await fetch(`${process.env.BASE_URL}/posts/${query.id}`)
    const post: IPost = await response.json()
    return {
        data: post.text
    }
}