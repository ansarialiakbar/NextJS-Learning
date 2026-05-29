import Link from "next/link";

const blogs = [
    {slug: "first-blog", title: "First Blog"},
    {slug: "second-blog", title: "Second Blog"},
    {slug: "third-blog", title: "Third Blog"},
]
export default function BlogPage(){
    return(
        <div>
            <h1>Blog Page</h1>
            <ul>
                {blogs.map((blog) => (
                    <li key={blog.slug}>
                        <Link href={`/blog/${blog.slug}`}>
                            {blog.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}