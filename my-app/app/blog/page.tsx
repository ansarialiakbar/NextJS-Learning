import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog Page",
    description: "This is the blog page of my Next.js application.",
    openGraph: {    
        title: "Blog Page | My Next.js App",
        description: "This is the blog page of my Next.js application.",
        images: ["/og-image.jpg"]
    
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog Page | My Next.js App",    
        description: "This is the blog page of my Next.js application.",
        images: ["/og-image.jpg"]
    }
}
export default function BlogPage(){
    return(
        <div style={{padding: "20px"}}>
            <h1>Blog Page</h1>
            <p>Welcome to the blog page of my Next.js application. Here you can find various articles and posts about different topics. Stay tuned for more updates!</p>
        </div>
    )
}


// import Link from "next/link";

// const blogs = [
//     {slug: "first-blog", title: "First Blog"},
//     {slug: "second-blog", title: "Second Blog"},
//     {slug: "third-blog", title: "Third Blog"},
// ]
// export default function BlogPage(){
//     return(
//         <div>
//             <h1>Blog Page</h1>
//             <ul>
//                 {blogs.map((blog) => (
//                     <li key={blog.slug}>
//                         <Link href={`/blog/${blog.slug}`}>
//                             {blog.title}
//                         </Link>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }