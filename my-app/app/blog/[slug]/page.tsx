interface BlogPageProps {
    params: {
        slug: string;
    }
}
const blogData : Record<string, {title: string, content: string}> = {
    "first-blog": {
        title: "First Blog",
        content: "this is the first blog of Next.js" 
        },
    "second-blog": {
         title: "Second Blog",
        content: "this is the second blog of Next.js" 
    },
    "third-blog": {
         title: "Third Blog",
        content: "this is the third blog of Next.js" 
    }
}
export default async function BlogDetailsPage({params}: BlogPageProps){
    const {slug} = await params;
    const blog = blogData[slug];
    console.log("Blog Data:", blog);
    if(!blog){
        return <h1>Blog not found</h1>
    }
    return (
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
            <p>Slug URL: {slug}</p>
        </div>
    )
}