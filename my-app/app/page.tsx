interface Post{
    id: number;
    title: string;
    body: string;
}

export default async function HomePage(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {cache: "no-store"});
    const posts: Post[] = await response.json();

    return(
        <div style={{padding: "20px"}}>
            <h1>Fetch Posts Data from Server</h1>
            <ul>
                {posts.slice(0, 5).map(post => (
                    <li key = {post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}