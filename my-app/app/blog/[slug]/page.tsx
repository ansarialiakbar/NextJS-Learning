import {Metadata} from "next";

type Props = {
    params: {
        params: Promise<{slug: string}>
    }
}

async function getPostData(slug: string){
    return {
        title: `Blog Post: ${slug}`,
        description: `This is the content of the blog post with slug: ${slug}`
    }
}

// Dynamic SEO
export async function generateMetadata({params}: Props): Promise<Metadata>{
    const {slug} = await params.params;
    const postData = await getPostData(slug);
    return {
        title: postData.title,
        description: postData.description,
        openGraph: {
            title: postData.title,
            description: postData.description,      
    }
}
}

// Page Content
export default async function BlogDetailsPage({params}: Props){
    const {slug} = await params.params;
    // const postData = await getPostData(slug);
    return(
        <div style={{padding: "20px"}}>
            <h1>Blog Post: {slug}</h1>
            
        </div>
    )
}

// interface BlogPageProps {
//     params: {
//         slug: string;
//     }
// }
// const blogData : Record<string, {title: string, content: string}> = {
//     "first-blog": {
//         title: "First Blog",
//         content: "this is the first blog of Next.js" 
//         },
//     "second-blog": {
//          title: "Second Blog",
//         content: "this is the second blog of Next.js" 
//     },
//     "third-blog": {
//          title: "Third Blog",
//         content: "this is the third blog of Next.js" 
//     }
// }
// export default async function BlogDetailsPage({params}: BlogPageProps){
//     const {slug} = await params;
//     const blog = blogData[slug];
//     console.log("Blog Data:", blog);
//     if(!blog){
//         return <h1>Blog not found</h1>
//     }
//     return (
//         <div>
//             <h1>{blog.title}</h1>
//             <p>{blog.content}</p>
//             <p>Slug URL: {slug}</p>
//         </div>
//     )
// }