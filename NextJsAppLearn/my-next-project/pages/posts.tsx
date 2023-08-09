import StylePage from "../component/page.loyout";
import fetch from 'isomorphic-unfetch'
import Link from "next/link";
import {IPost} from "../Types/PostTypes";
import {NextPageContext} from "next";

interface PostParams {
    posts: IPost[]
}
export default function Posts({posts}: PostParams) {
    return (
        <StylePage currentPageTitle={'Posts'}>
            <div>
                <h1>Posts</h1>
                <ol>
                        {posts.map(post => (
                            <>
                                <Link key={post.id} href={'/post/[id]'} as={`/post/${post.id}`}>{post.id}. {post.name}</Link><br/>
                            </>
                        ))}
                </ol>
            </div>
        </StylePage>
    )
}
Posts.getInitialProps = async ({req}: NextPageContext) => {
    const response = await fetch(`${process.env.BASE_URL}/posts`)
    const posts: IPost[] = await response.json()
    return {
        posts
    }
}