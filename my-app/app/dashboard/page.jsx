"use client"
import {useRouter} from 'next/navigation';
export default function Dashboard(){
    const router = useRouter();
    return(
        <div>
            <h1>Dashboard Page</h1>
            <button onClick={()=>router.push('/')}>Go to HomePage</button>
        </div>
    )
}